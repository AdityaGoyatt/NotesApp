import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useCurrentTopic from "../../HooksZustand/useCurrentTopic";
import useTopics from "../../hooks/useTopics";
import useTopicById from "../../hooks/useTopicById";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
interface Props {
  partSlug: string;
}
const ButtonSelector = ({ partSlug }: Props) => {
  const topics = useTopics.getTopics(partSlug);
  const { setCurrentTopicSlug } = useCurrentTopic();

  const onClick = (topicSlug: string) => {
    setCurrentTopicSlug(topicSlug);
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
            onClick={() => {
              {
                onClick(topic.topicSlug);
                console.log(topic.topicSlug);
              }
            }}
          >
            {topic.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ButtonSelector;
