import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useTopics from "../hooks/useTopics";
import { useState } from "react";

interface Props {
  handleClick: (chosenTopic: string) => void;
  topicSlug: string;
}
const ButtonTopicSelector = ({ handleClick, topicSlug }: Props) => {
  const topics = useTopics(topicSlug);
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <Menu>
      <MenuButton
        margin="30px"
        w="25vh"
        size="lg"
        paddingX={3}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedTopic || "Select A Topic"}
      </MenuButton>
      <MenuList>
        {topics?.topicsArray.map((topic) => (
          <MenuItem key={topic.slug} onClick={() => handleClick(topic.slug)}>
            {topic.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ButtonTopicSelector;
