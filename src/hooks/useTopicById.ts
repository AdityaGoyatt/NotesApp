import { useQuery } from "@tanstack/react-query";
import { Topic } from "./entities";
import apiClient from "./apiClient";

const useTopicById = (topicSlug: string) =>
  useQuery<Topic>({
    queryKey: ["Topic"],
    queryFn: () =>
      apiClient.get<Topic>("/topic/" + topicSlug).then((res) => res.data),
  });

export default useTopicById;
