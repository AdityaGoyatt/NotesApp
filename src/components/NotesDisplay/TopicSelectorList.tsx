import { Button, VStack, List } from "@chakra-ui/react";

import useTopics from "../../hooks/useTopics";
import useCurrentTopic from "../../HooksZustand/useCurrentTopic";

interface Props {
  partSlug: string;
}
const TopicSelectorList = ({ partSlug }: Props) => {
  const topics = useTopics.getTopics(partSlug);
  const { setCurrentTopicSlug } = useCurrentTopic();
  const onClick = (topicSlug: string) => {
    setCurrentTopicSlug(topicSlug);
  };

  return (
    <List>
      <VStack>
        {topics?.map((topic) => (
          <Button
            margin="5px"
            w="25vh"
            size="lg"
            key={topic.topicSlug}
            onClick={() => onClick(topic.topicSlug)}
          >
            {topic.name}
          </Button>
        ))}
      </VStack>
    </List>
  );
};

export default TopicSelectorList;
