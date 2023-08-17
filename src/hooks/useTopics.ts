import { useQuery } from "@tanstack/react-query";
import { Topic } from "./entities";
import apiClient from "./apiClient";

export const topicFn = <T>(slug: string, queryKey: string) =>
  useQuery<T>({
    queryKey: [queryKey],
    queryFn: () => apiClient.get<T>(slug).then((res) => res.data),
  });

class Topics {
  getTopics(partSlug: string) {
    return topicFn<Topic[]>(partSlug, "Topics").data;
  }
}

export default new Topics();
