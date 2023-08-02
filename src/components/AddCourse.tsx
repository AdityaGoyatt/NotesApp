import {
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Course, CourseTopicPostObj } from "../hooks/useCourse";
import { FormEvent, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../hooks/apiClient";
import { Subtopic } from "../hooks/useSubTopics";
const AddCourse = () => {
  const addCourse = useMutation({
    mutationFn: (course: CourseTopicPostObj) =>
      apiClient
        .post<CourseTopicPostObj>("/Course", course)
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
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Box m={4}>
          <FormControl mb={4}>
            <HStack>
              <Input
                type="text"
                placeholder="Enter your course"
                ref={courseRef}
              />
              <Input
                type="text"
                placeholder="Enter a subtopic"
                ref={subTopicRef}
              />
              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
            </HStack>
          </FormControl>
        </Box>
      </form>
    </>
  );
};

export default AddCourse;
