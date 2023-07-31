import { useEffect, useState } from "react";
import apiClient from "./apiClient";

export interface Course {
  id: number;
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

  public addCourse(courseObj: Course) {
    // useEffect(() => {
    //   //   apiClient.post("/list", courseObj).then((res) => console.log(res.data));
    // }, []);
    console.log(courseObj);
  }
}

export default new course();
