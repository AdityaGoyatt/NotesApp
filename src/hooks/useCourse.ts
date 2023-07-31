import { useEffect, useState } from "react";
import apiClient from "./apiClient";

export interface Course {
  id?: number;
  course: string;
}

class course {
  public getCourses() {
    const [list, setList] = useState<Course[]>();
    useEffect(() => {
      apiClient.get<Course[]>("/list").then((res) => setList([...res.data]));
    }, []);
    return list;
  }

  public addCourse(courseObj: string) {
    const abc: Course = { course: courseObj };
    apiClient
      .post("/list", abc)
      .then((res) => console.log(res.data))
      .finally(() => console.log("closed"));
  }
}

export default new course();
