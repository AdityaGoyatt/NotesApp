import { create } from "zustand";
import useTopics from "../hooks/useTopics";
import { Topic } from "../hooks/entities";
interface TopicStore {
  currentTopic: Topic | undefined;
  setCurrentTopic: (topicSlug: string) => void;
}

const useCurrentTopic = create<TopicStore>((set) => ({
  currentTopic: undefined,
  setCurrentTopic: (slug) =>
    set(() => ({ currentTopic: useTopics.getTopicBySlug(slug) })),
}));

export default useCurrentTopic;
