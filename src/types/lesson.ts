export interface Lesson {
  id: string;
  semester: '上册' | '下册';
  unit: string;
  title: string;
  focus: string;
  points: string[];
}
