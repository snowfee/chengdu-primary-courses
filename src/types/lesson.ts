export interface Lesson {
  id: string;
  semester: '上册' | '下册';
  unit: string;
  title: string;
  focus: string;
  points: string[];
  characters?: LessonCharacter[];
}

export interface LessonCharacter {
  character: string;
  pinyin: string;
  strokes?: number;
  meaning?: string;
  words?: string[];
  sentence?: string;
  voiceText: string;
  strokeOrder?: readonly string[];
  strokeGifUrl?: string;
  pinyinSvg?: readonly PinyinSvgStroke[];
}

export interface PinyinSvgStroke {
  path: string;
  delay?: number;
  duration?: number;
  color?: string;
  linecap?: 'butt' | 'round' | 'square';
  linejoin?: 'round' | 'bevel' | 'miter';
}
