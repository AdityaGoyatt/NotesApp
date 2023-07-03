const topics = [{ slug: "", topicData: { name: "", slug: "" } }];

const useTopics = (topicSlug: string) => {
  return topics.find((topic) => topic.slug === topicSlug);
};
export default useTopics;
