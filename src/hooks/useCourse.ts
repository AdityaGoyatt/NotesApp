import { useEffect, useState } from "react";
import apiClient from "./apiClient";
import { Subtopic } from "./entities";
import { TopDirectory } from "./useCourseSubtopics";
export interface CourseTopicPostObj {
  course: Course;
  subTopics: Subtopic;
}
export interface Course {
  id?: number;
  name: string;
}

class course {
  public getCourses() {
    const [list, setList] = useState<Course[]>();
    useEffect(() => {
      apiClient
        .get<TopDirectory>("/courses")
        .then((res) => console.log(res.data));
    }, []);
    return list;
  }
}

export default new course();
