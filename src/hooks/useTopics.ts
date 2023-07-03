import topicsData from "../assets/storedData/topicsData";
import { topicList } from "../entities";

const topicDataBase: topicList[] = topicsData;
const useTopics = (topicSlug: string) => {
  return topicDataBase.find((topic) => topic.slug === topicSlug);
};
export default useTopics;
