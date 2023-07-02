export interface subjectQuery {
  name: string;
  MajorTopics: Array<Topic>;
}
interface Topic {
  name: string;
  slug: string;
}
export interface chaptersObject {
  slug: string;
  chapters: Array<Topic>;
}
