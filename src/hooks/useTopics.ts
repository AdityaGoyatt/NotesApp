const topics = [{ slug: "", topicData: [{ topicName: "", TopicSlug: "" }] }];

const useTopics = (topicSlug: string) => {
  return topics.find((topic) => topic.slug === topicSlug);
};
export default useTopics;
