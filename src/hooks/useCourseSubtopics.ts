import { Course } from "./entities";
import { Subtopic } from "./useSubTopics";
import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

export interface TopDirectory {
  baseDirectory: Array<Course>;
  subDirectory: Array<Subtopic>;
}

const useQueryFunction = (endpoint: string) =>
  useQuery<TopDirectory, Error>({
    queryKey: ["courses"],
    queryFn: () =>
      apiClient.get<TopDirectory>(endpoint).then((res) => res.data),
  });

class useCoursesSubtopics {
  getAllCourses() {
    return useQueryFunction("/courses").data?.baseDirectory;
  }

  getAllSubTopics() {
    return useQueryFunction("/courses").data?.subDirectory;
  }
}
export default new useCoursesSubtopics();
