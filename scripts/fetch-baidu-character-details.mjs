import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const lessonCharacters = {
  's1-05': '金木水火土一二三四五',
  's1-06': '口耳目手足',
  's1-07': '日月水火山石田禾',
  's1-08': '云雨风花鸟虫',
  's1-26': '远有色近听无声去还来',
  's1-27': '大小多少黄牛只猫边鸭苹果杏桃',
  's1-28': '书包尺作业本笔刀课早校',
  's1-29': '明力尘从众双木林森条心',
  's1-30': '升国旗中红歌起么美丽立',
  's2-01': '春冬风雪花飞入',
  's2-02': '姓什么双国王方',
  's2-03': '青清晴情请',
  's2-04': '字左右红时动万',
  's2-09': '他河说也地听哥',
  's2-10': '单居招呼快乐',
  's2-11': '玩很当音讲行许'
};

const uniqueCharacters = [
  ...new Set(Object.values(lessonCharacters).flatMap((value) => Array.from(value)))
];

function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function fetchCharacter(character) {
  const url = `https://hanyu.baidu.com/hanyu-page/zici/s?wd=${encodeURIComponent(character)}&ptype=zici`;
  const html = execFileSync(
    edgePath,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--virtual-time-budget=8000',
      '--dump-dom',
      url
    ],
    {
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 8,
      windowsHide: true,
      stdio: ['ignore', 'pipe', 'ignore']
    }
  );

  const decoded = decodeHtml(html);
  const gifUrl = decoded.match(/https:\/\/hanyu-word-gif\.cdn\.bcebos\.com\/[^"'<>\s]+\.gif/)?.[0] ?? '';
  const pinyin = decoded.match(/class="pinyin-text">([^<]+)<\/div>/)?.[1]?.trim() ?? '';
  const strokes = Number(decoded.match(/笔画<\/span>\s*<span[^>]*>(\d+)<\/span>/)?.[1] ?? 0);

  return { character, pinyin, strokes, strokeGifUrl: gifUrl };
}

const details = {};

for (const character of uniqueCharacters) {
  details[character] = fetchCharacter(character);
  console.log(`${character}\t${details[character].pinyin}\t${details[character].strokes}\t${details[character].strokeGifUrl}`);
}

writeFileSync(
  new URL('./baidu-character-details.json', import.meta.url),
  `${JSON.stringify({ lessonCharacters, details }, null, 2)}\n`,
  'utf8'
);
