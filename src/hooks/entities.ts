export interface TopDirectory {
  baseDirectory: Array<Course>;
  subDirectory: Array<Subtopic>;
}

export interface Course {
  id?: number;
  name: string;
}

export interface Subtopic {
  subtopicName: string;
  subtopicSlug?: string;
  course?: Course;
}

export interface CourseTopicPostObj {
  course: Course;
  subTopics: Subtopic;
}

export interface Part {
  partSlug?: string;
  partName: string;
  subTopic: Subtopic;
}

export interface Topic {
  topicSlug: string;
  name: string;
  syntaxImage: string;
  syntaxComment: string;
  resultImage: string;
}

export interface TopicDataSent {
  topicSlug: string;
  name: string;
  syntaxImage: File;
  syntaxComment: string;
  resultImage: File;
}
