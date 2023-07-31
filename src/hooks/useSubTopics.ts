export interface Subtopic {
  subtopicName: String;
  subtopicId?: number;
  course?: Course;
}
import apiClient from "./apiClient";
import { useEffect, useState } from "react";
import { Course } from "./useCourse";

const useSubTopics = (courseId: number) => {
  const [list, setList] = useState<Subtopic[]>();
  useEffect(() => {
    apiClient
      .get<Subtopic[]>("/subtopics/" + courseId)
      .then((res) => setList([...res.data]));
  });
  return list;
};

export default useSubTopics;

class useCubTopics {
  public getTopics(courseId: number) {
    const [list, setList] = useState<Subtopic[]>();
    useEffect(() => {
      apiClient
        .get<Subtopic[]>("/subtopics/" + courseId)
        .then((res) => setList([...res.data]));
    });
    return list;
  }
}
