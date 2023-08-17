import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useCurrentTopic from "../HooksZustand/useCurrentTopic";
import useTopics from "../hooks/useListTopics";

interface Props {
  partSlug: string;
}
const ButtonSelector = ({ partSlug }: Props) => {
  const topics = useTopics.getTopics(partSlug);
  const { setCurrentTopic } = useCurrentTopic();
  const onClick = (topicSlug: string) => {
    setCurrentTopic(topicSlug);
  };
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
