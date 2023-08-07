import { useQuery } from "@tanstack/react-query";
import { Topic } from "./entities";
import apiClient from "./apiClient";

const useTopics = <T>(slug: string, queryKey: string) =>
  useQuery<T>({
    queryKey: [queryKey],
    queryFn: () => apiClient.get<T>(slug).then((res) => res.data),
  });

class Topics {
  getTopics(partSlug: string) {
    return useTopics<Topic[]>(partSlug, "Topics").data;
  }

  getTopicBySlug(topicSlug: string) {
    return useTopics<Topic>(topicSlug, "Topic").data;
  }
}

export default new Topics();
