import { Course } from "./entities";
import { Subtopic } from "./entities";
import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

export interface TopDirectory {
  baseDirectory: Array<Course>;
  subDirectory: Array<Subtopic>;
}

const useQueryFunction = <T>(endpoint: string) =>
  useQuery<T, Error>({
    queryKey: ["courses"],
    queryFn: () => apiClient.get<T>(endpoint).then((res) => res.data),
  });

class useCoursesSubtopics {
  getAllCourses() {
    return useQueryFunction<TopDirectory>("/courses").data?.baseDirectory;
  }

  getAllSubTopics() {
    return useQueryFunction<TopDirectory>("/courses").data?.subDirectory;
  }
  getSubTopicBySlug(subtopicSlug: string) {
    return useQueryFunction<Subtopic>("/courses/" + subtopicSlug).data;
  }
}
export default new useCoursesSubtopics();
