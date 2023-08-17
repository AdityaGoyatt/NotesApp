import { create } from "zustand";
import { Topic } from "../hooks/entities";
interface TopicStore {
  currentTopic: Topic | undefined;
  setCurrentTopic: (topic: Topic | undefined) => void;
}

const useCurrentTopic = create<TopicStore>((set) => ({
  currentTopic: undefined,
  setCurrentTopic: (topic) => set(() => ({ currentTopic: topic })),
}));

export default useCurrentTopic;
