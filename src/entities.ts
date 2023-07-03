export interface subjectQuery {
  name: string;
  underDevelopment?: boolean;
  MajorTopics: Array<Topic>;
}
export interface Topic {
  name: string;
  slug: string;
}
export interface chaptersObject {
  slug: string;
  underDevelopment?: boolean;
  chapters: Array<Topic>;
}

export interface notesData {
  code: string;
  output: string;
  description: string;
  comments: string;
}

export interface codeNotes {
  name: string;
  slug: "";
  mainData: notesData;
}
