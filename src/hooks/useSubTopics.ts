export interface Subtopic {
  subtopicName: string;
  slug?: string;
  course?: Course;
}
import apiClient from "./apiClient";
import { useEffect, useState } from "react";
import { Course } from "./entities";

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
    apiClient.post<Subtopic>("/subtopics", subtopic).then((res) => res.data);
  }
}

export default new useSubTopics();
