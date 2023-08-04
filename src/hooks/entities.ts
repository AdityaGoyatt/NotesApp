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
