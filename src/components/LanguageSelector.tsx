import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { subjectQuery } from "../entities";

interface Props {
  itemList: subjectQuery;
}
const LanguageSelector = ({ itemList }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton
          margin="30px"
          w="25vh"
          size="lg"
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          {itemList.name}
        </MenuButton>
        <MenuList>
          {itemList.MajorTopics.map((topic) => (
            <MenuItem key={topic.name}>{topic.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LanguageSelector;
