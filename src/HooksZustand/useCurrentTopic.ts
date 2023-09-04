import { create } from "zustand";
interface TopicStore {
  currentTopicSlug: string | undefined;
  setCurrentTopicSlug: (topic: string | undefined) => void;
}

const useCurrentTopic = create<TopicStore>((set) => ({
  currentTopicSlug: undefined,
  setCurrentTopicSlug: (topic) => set(() => ({ currentTopicSlug: topic })),
}));

export default useCurrentTopic;
