import { useEffect, useState } from "react";
import apiClient from "./apiClient";
import { Subtopic } from "./useSubTopics";
export interface CourseTopicPostObj {
  course: Course;
  subTopics: Subtopic;
}
export interface Course {
  id?: number;
  name: string;
}
// export const postCourse =(course: Course)=> {
//   apiClient.post<Course>("/list", course).then((res) => res.data);
// }

class course {
  public getCourses() {
    const [list, setList] = useState<Course[]>();
    useEffect(() => {
      apiClient.get<Course[]>("/list").then((res) => setList([...res.data]));
    }, []);
    return list;
  }

  // public addCourse(courseName: string) {
  //   const course: Course = { name: courseName };
  //   const fetch = () =>
  //     apiClient.post<Course>("/list", courseName).then((res) => res.data);

  //   const addCourse = useMutation({
  //     mutationFn: fetch,
  //     onSuccess: (dbCourse) => {
  //       console.log(dbCourse);
  //     },
  //   });}
}

export default new course();
