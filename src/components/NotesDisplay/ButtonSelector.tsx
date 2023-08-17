import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useCurrentTopic from "../../HooksZustand/useCurrentTopic";
import useTopics from "../../hooks/useTopics";
import useTopicById from "../../hooks/useTopicById";
interface Props {
  partSlug: string;
}
const ButtonSelector = ({ partSlug }: Props) => {
  const topics = useTopics.getTopics(partSlug);
  const topic = useTopicById("aditya_goyat").data;
  console.log(topic);
  const { setCurrentTopic } = useCurrentTopic();
  const onClick = (topicSlug: string) => {};
  return (
    <Menu>
      <MenuButton m={5} as={Button} variant="outline">
        Topics...
      </MenuButton>
      <MenuList>
        {topics?.map((topic) => (
          <MenuItem
            key={topic.topicSlug}
            onClick={() => onClick(topic.topicSlug)}
          >
            {topic.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ButtonSelector;
