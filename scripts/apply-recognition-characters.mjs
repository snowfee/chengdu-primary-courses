import { readFileSync, writeFileSync } from 'node:fs';

const dataPath = new URL('../src/data/chineseLessons.ts', import.meta.url);
const detailsPath = new URL('./baidu-character-details.json', import.meta.url);

const source = readFileSync(dataPath, 'utf8');
const { lessonCharacters, details } = JSON.parse(readFileSync(detailsPath, 'utf8'));

const targetLessonCharacters = Object.fromEntries(
  Object.entries(lessonCharacters).map(([lessonId, characters]) => [
    lessonId,
    Array.from(characters)
  ])
);

const targetDetails = {};

for (const characters of Object.values(targetLessonCharacters)) {
  for (const character of characters) {
    const item = details[character];
    if (!item?.strokeGifUrl) {
      throw new Error(`Missing Baidu GIF for ${character}`);
    }

    targetDetails[character] = {
      pinyin: item.pinyin,
      strokeGifUrl: item.strokeGifUrl
    };
  }
}

const helper = `import type { Lesson, LessonCharacter } from '../types/lesson';

const recognitionCharacterSets = ${JSON.stringify(targetLessonCharacters, null, 2)} as const;

const baiduCharacterDetails = ${JSON.stringify(targetDetails, null, 2)} as const;

function createRecognitionCharacters(
  lessonId: keyof typeof recognitionCharacterSets
): LessonCharacter[] {
  return recognitionCharacterSets[lessonId].map((character) => {
    const detail = baiduCharacterDetails[character];

    return {
      character,
      pinyin: detail.pinyin,
      meaning: \`认识“\${character}”这个汉字，结合课文和生活场景理解意思。\`,
      words: [\`\${character}字\`],
      sentence: \`我会认“\${character}”。\`,
      voiceText: character,
      strokeGifUrl: detail.strokeGifUrl
    };
  });
}
`;

let nextSource = source.replace(
  /^import type \{ Lesson(?:, LessonCharacter)? \} from '\.\.\/types\/lesson';\r?\n(?:\r?\nconst recognitionCharacterSets[\s\S]*?\r?\n}\r?\n)?/,
  helper
);

for (const lessonId of Object.keys(targetLessonCharacters)) {
  const lessonStart = nextSource.indexOf(`id: '${lessonId}'`);
  if (lessonStart === -1) {
    throw new Error(`Cannot find lesson ${lessonId}`);
  }

  const nextLessonStart = nextSource.indexOf(`\n  {\n    id: '`, lessonStart + 1);
  const lessonEnd = nextLessonStart === -1 ? nextSource.indexOf('\n];', lessonStart) : nextLessonStart;
  const lessonBlock = nextSource.slice(lessonStart, lessonEnd);

  if (lessonBlock.includes('characters:')) {
    nextSource =
      nextSource.slice(0, lessonStart) +
      lessonBlock.replace(/characters:\s*createRecognitionCharacters\('s[12]-\d+'\)/, `characters: createRecognitionCharacters('${lessonId}')`) +
      nextSource.slice(lessonEnd);
    continue;
  }

  const pointsEnd = lessonStart + lessonBlock.indexOf('\n    ]') + '\n    ]'.length;
  nextSource =
    nextSource.slice(0, pointsEnd) +
    `,\n    characters: createRecognitionCharacters('${lessonId}')` +
    nextSource.slice(pointsEnd);
}

writeFileSync(dataPath, nextSource, 'utf8');
