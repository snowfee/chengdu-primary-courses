import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const root = normalize(join(process.cwd(), 'dist'));
const port = 5173;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function resolvePath(urlPath) {
  const cleanPath = urlPath === '/' ? '/index.html' : urlPath;
  const nextPath = normalize(join(root, cleanPath));
  if (!nextPath.startsWith(root)) {
    return null;
  }
  return nextPath;
}

const server = createServer((req, res) => {
  const requestUrl = req.url ?? '/';
  const filePath = resolvePath(requestUrl.split('?')[0]);

  if (!filePath || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Not found');
    return;
  }

  const extension = extname(filePath);
  res.statusCode = 200;
  res.setHeader('Content-Type', mimeTypes[extension] ?? 'application/octet-stream');
  createReadStream(filePath).pipe(res);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Static server ready at http://127.0.0.1:${port}`);
});
