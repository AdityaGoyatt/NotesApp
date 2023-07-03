export interface subjectQuery {
  name: string;
  MajorTopics: Array<Topic>;
}
export interface Topic {
  name: string;
  slug: string;
}
export interface chaptersObject {
  slug: string;
  chapters: Array<Topic>;
}

export interface notesData {
  code: string;
  output: string;
  description: string;
  comments: string;
}

export interface codeNotes {
  slug: string;
  mainData: notesData;
}
