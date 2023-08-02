export interface Subtopic {
  subtopicName: String;
  subtopicId?: number;
  course?: Course;
}
import apiClient from "./apiClient";
import { useEffect, useState } from "react";
import { Course } from "./useCourse";

class useSubTopics {
  getTopics(courseId: number) {
    const [list, setList] = useState<Subtopic[]>();
    useEffect(() => {
      apiClient
        .get<Subtopic[]>("/subtopics/" + courseId)
        .then((res) => setList([...res.data]));
    });
    return list;
  }

  addSubtopic(subtopic: Subtopic) {
    apiClient
      .post<Subtopic>("/subtopics", subtopic)
      .then((res) => console.log(res.data));
  }
}

export default new useSubTopics();
