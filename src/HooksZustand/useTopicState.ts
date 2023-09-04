import { create } from "zustand";
import { Topic } from "../hooks/entities";

interface TopicHook {
  currentTopic: Topic | undefined;
  setCurrentTopic: (topic: Topic | undefined) => void;
}

const maintopic = create<TopicHook>((set) => ({
  currentTopic: undefined,
  setCurrentTopic: (topic) => set(() => ({ currentTopic: topic })),
}));
export default maintopic;
