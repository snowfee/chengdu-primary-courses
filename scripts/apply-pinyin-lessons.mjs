import { readFileSync, writeFileSync } from 'node:fs';

const dataPath = new URL('../src/data/chineseLessons.ts', import.meta.url);
const htmlPath = new URL('./wechat-pinyin-page.html', import.meta.url);

const lessonPinyin = {
  's1-09': ['a', 'o', 'e'],
  's1-10': ['i', 'u', 'ü', 'y', 'w'],
  's1-11': ['b', 'p', 'm', 'f'],
  's1-12': ['d', 't', 'n', 'l'],
  's1-13': ['g', 'k', 'h'],
  's1-14': ['j', 'q', 'x'],
  's1-15': ['z', 'c', 's'],
  's1-16': ['zh', 'ch', 'sh', 'r'],
  's1-17': ['ai', 'ei', 'ui'],
  's1-18': ['ao', 'ou', 'iu'],
  's1-19': ['ie', 'üe', 'er'],
  's1-20': ['an', 'en', 'in', 'un', 'ün'],
  's1-21': ['ang', 'eng', 'ing', 'ong']
};

function decodeHtml(value) {
  return value
    .replaceAll('\\x3c', '<')
    .replaceAll('\\x3e', '>')
    .replaceAll('\\x22', '"')
    .replaceAll('\\x26', '&')
    .replaceAll('&amp;', '&');
}

const html = decodeHtml(readFileSync(htmlPath, 'utf8'));
const allGifUrls = [
  ...new Set(
    [...html.matchAll(/https:\/\/mmbiz\.qpic\.cn\/mmbiz_gif\/[^"'\s<>]+?640\?wx_fmt=gif[^"'\s<>#]*/g)]
      .map((match) => match[0].replaceAll('&amp;', '&'))
  )
];

const pinyinGifUrls = allGifUrls.slice(1, 46);
const pinyinDetails = {};
let gifIndex = 0;

for (const symbols of Object.values(lessonPinyin)) {
  for (const symbol of symbols) {
    pinyinDetails[symbol] = {
      strokeGifUrl: pinyinGifUrls[gifIndex] ?? ''
    };
    gifIndex += 1;
  }
}

const helper = `
const pinyinCharacterSets = ${JSON.stringify(lessonPinyin, null, 2)} as const;

const pinyinWritingDetails = ${JSON.stringify(pinyinDetails, null, 2)} as const;

function createPinyinCharacters(
  lessonId: keyof typeof pinyinCharacterSets
): LessonCharacter[] {
  return pinyinCharacterSets[lessonId].map((symbol) => {
    const detail = pinyinWritingDetails[symbol];

    return {
      character: symbol,
      pinyin: symbol,
      meaning: \`学习拼音“\${symbol}”的规范写法，观察它在四线三格中的位置。\`,
      words: ['四线三格', '规范书写'],
      sentence: \`我会写拼音“\${symbol}”。\`,
      voiceText: symbol,
      strokeGifUrl: detail.strokeGifUrl || undefined
    };
  });
}
`;

let source = readFileSync(dataPath, 'utf8');

if (!source.includes('const pinyinCharacterSets =')) {
  source = source.replace('\nexport const chineseLessons', `${helper}\nexport const chineseLessons`);
}

for (const lessonId of Object.keys(lessonPinyin)) {
  const lessonStart = source.indexOf(`id: '${lessonId}'`);
  if (lessonStart === -1) {
    throw new Error(`Cannot find lesson ${lessonId}`);
  }

  const nextLessonStart = source.indexOf(`\n  {\n    id: '`, lessonStart + 1);
  const lessonEnd = nextLessonStart === -1 ? source.indexOf('\n];', lessonStart) : nextLessonStart;
  const lessonBlock = source.slice(lessonStart, lessonEnd);

  if (lessonBlock.includes('characters:')) {
    const nextBlock = lessonBlock.replace(
      /characters:\s*(?:createPinyinCharacters\('s1-\d+'\)|\[[\s\S]*?\n    \])/,
      `characters: createPinyinCharacters('${lessonId}')`
    );
    source = source.slice(0, lessonStart) + nextBlock + source.slice(lessonEnd);
    continue;
  }

  const pointsEnd = lessonStart + lessonBlock.indexOf('\n    ]') + '\n    ]'.length;
  source =
    source.slice(0, pointsEnd) +
    `,\n    characters: createPinyinCharacters('${lessonId}')` +
    source.slice(pointsEnd);
}

writeFileSync(new URL('./pinyin-writing-details.json', import.meta.url), `${JSON.stringify({ lessonPinyin, pinyinDetails }, null, 2)}\n`, 'utf8');
writeFileSync(dataPath, source, 'utf8');
