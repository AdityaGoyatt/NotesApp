import {
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Box,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { Course, CourseTopicPostObj } from "../hooks/entities";
import { FormEvent, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../hooks/apiClient";
import { Subtopic } from "../hooks/useSubTopics";
import { useNavigate } from "react-router-dom";
const AddCourse = () => {
  const navigate = useNavigate();
  const isHorizontal = useBreakpointValue({ base: false, lg: true });
  const addCourse = useMutation({
    mutationFn: (course: CourseTopicPostObj) =>
      apiClient
        .post<CourseTopicPostObj>("/courses", course)
        .then((res) => res.data),
    onSuccess: (recievedObj) => console.log(recievedObj),
  });

  const courseRef = useRef<HTMLInputElement>(null);
  const subTopicRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (courseRef.current && subTopicRef.current?.value) {
      const course: Course = { name: courseRef.current.value };
      const subtopic: Subtopic = { subtopicName: subTopicRef.current.value };
      addCourse.mutate({ course: course, subTopics: subtopic });
      navigate("/");
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Box p={7}>
          {isHorizontal ? (
            <FormControl>
              <Center>
                <Input
                  m={4}
                  width="35vw"
                  type="text"
                  placeholder="Enter your course"
                  ref={courseRef}
                />
                <Input
                  m={4}
                  width="35vw"
                  type="text"
                  placeholder="Enter a subtopic"
                  ref={subTopicRef}
                />
                <Button m={4} width="15vw" colorScheme="blue" type="submit">
                  Add
                </Button>
              </Center>
            </FormControl>
          ) : (
            <FormControl marginRight={3}>
              <Input
                maxW="80vw"
                m={2}
                type="text"
                placeholder="Enter your course"
                ref={courseRef}
              />
              <Input
                maxW="80vw"
                m={2}
                type="text"
                placeholder="Enter a subtopic"
                ref={subTopicRef}
              />
              <Button
                bgGradient="linear-gradient(to right, #c33764, #1d2671)"
                type="submit"
                m={2}
                width="25vw"
              >
                Add
              </Button>
            </FormControl>
          )}
        </Box>
      </form>
    </>
  );
};

export default AddCourse;
