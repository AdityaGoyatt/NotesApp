import { useEffect, useState } from "react";
import apiClient from "./apiClient";

export interface Course {
  id?: number;
  name: string;
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
    const abc: Course = { name: courseObj };
    const [dbCourse, setDbCourse] = useState<Course>();
    apiClient.post("/list", abc).then((res) => setDbCourse({ ...res.data }));
    return dbCourse;
  }
}

export default new course();
