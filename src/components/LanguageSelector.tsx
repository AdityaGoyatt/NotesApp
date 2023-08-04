import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Course } from "../hooks/entities";
import useCourseSubtopics from "../hooks/useCourseSubtopics";

interface Props {
  course: Course;
}
const LanguageSelector = ({ course }: Props) => {
  const subtopics = useCourseSubtopics
    .getAllSubTopics()
    ?.filter((subtopic) => subtopic.course?.id == course.id);

  return (
    <>
      <Menu>
        <MenuButton
          margin="30px"
          w="25vh"
          size="lg"
          paddingX={3}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          {course.name}
        </MenuButton>
        <MenuList>
          {subtopics?.map((topic) => (
            <Link
              to={`/${topic.subtopicName}`}
              key={topic.subtopicName + "vvv"}
            >
              <MenuItem key={topic.slug}>{topic.subtopicName}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LanguageSelector;
