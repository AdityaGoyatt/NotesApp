import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Course } from "../../hooks/entities";
import useCourseSubtopics from "../../hooks/useCourseSubtopics";
import useCurrentDirectory from "../../HooksZustand/useCurrentDirectory";
import { useEffect } from "react";

interface Props {
  course: Course;
}
const LanguageSelector = ({ course }: Props) => {
  const { setCurrentDirectory } = useCurrentDirectory();
  useEffect(() => {
    setCurrentDirectory("Course");
  }, []);
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
              to={`/${topic.subtopicSlug}`}
              key={topic.subtopicName + "vvv"}
            >
              <MenuItem key={topic.subtopicSlug}>{topic.subtopicName}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LanguageSelector;
