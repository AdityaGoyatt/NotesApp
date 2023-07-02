import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { subjectQuery } from "../entities";
import { Link } from "react-router-dom";

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
            <Link to={`/${topic.slug}`}>
              <MenuItem key={topic.name}>{topic.name}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LanguageSelector;
