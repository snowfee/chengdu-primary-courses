import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/data/chineseLessons.ts', import.meta.url), 'utf8');
const expectedCharacters = ['天', '地', '人', '你', '我', '他'];
const expectedGeneratedLessons = [
  's1-05',
  's1-06',
  's1-07',
  's1-08',
  's1-26',
  's1-27',
  's1-28',
  's1-29',
  's1-30',
  's2-01',
  's2-02',
  's2-03',
  's2-04',
  's2-09',
  's2-10',
  's2-11'
];
const expectedPinyinLessons = [
  's1-09',
  's1-10',
  's1-11',
  's1-12',
  's1-13',
  's1-14',
  's1-15',
  's1-16',
  's1-17',
  's1-18',
  's1-19',
  's1-20',
  's1-21'
];

const lessonMatch = source.match(/id: 's1-04'[\s\S]*?characters:\s*\[([\s\S]*?)\n\s*\]/);

if (!lessonMatch) {
  throw new Error('s1-04 needs a characters array.');
}

const lessonBlock = lessonMatch[1];

for (const character of expectedCharacters) {
  const cardPattern = new RegExp(`character: '${character}'[\\s\\S]*?pinyin: '[^']+'[\\s\\S]*?strokes: \\d+[\\s\\S]*?meaning: '[^']+'[\\s\\S]*?voiceText: '${character}'[\\s\\S]*?strokeOrder: \\[[\\s\\S]*?strokeGifUrl: 'https://[^']+\\.gif'`);

  if (!cardPattern.test(lessonBlock)) {
    throw new Error(`${character} needs pinyin, strokes, meaning, voice text, stroke order, and a real GIF URL.`);
  }
}

for (const lessonId of expectedGeneratedLessons) {
  if (!source.includes(`characters: createRecognitionCharacters('${lessonId}')`)) {
    throw new Error(`${lessonId} needs generated recognition characters.`);
  }
}

const baiduGifCount = [...source.matchAll(/strokeGifUrl": "https:\/\/hanyu-word-gif\.cdn\.bcebos\.com\//g)].length;

if (baiduGifCount < 100) {
  throw new Error(`Expected generated recognition lessons to keep Baidu GIFs, found ${baiduGifCount}.`);
}

for (const lessonId of expectedPinyinLessons) {
  if (!source.includes(`characters: createPinyinCharacters('${lessonId}')`)) {
    throw new Error(`${lessonId} needs generated pinyin writing characters.`);
  }
}

const wechatGifCount = [...source.matchAll(/strokeGifUrl": "https:\/\/mmbiz\.qpic\.cn\/mmbiz_gif\//g)].length;

if (wechatGifCount < 45) {
  throw new Error(`Expected at least 45 WeChat pinyin GIFs, found ${wechatGifCount}.`);
}

console.log('Chinese character details are complete.');
