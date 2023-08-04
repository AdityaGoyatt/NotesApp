import { Button, FormControl, Input, Select } from "@chakra-ui/react";
import useCourseSubtopics from "../hooks/useCourseSubtopics";
import { FormEvent, useRef, useState } from "react";
import { Course, CourseTopicPostObj, Subtopic } from "../hooks/entities";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../hooks/apiClient";
import { useNavigate } from "react-router-dom";

const AddToExistingSubtopic = () => {
  const navigate = useNavigate();
  const courses = useCourseSubtopics.getAllCourses();
  const addCourse = useMutation({
    mutationFn: (course: CourseTopicPostObj) =>
      apiClient
        .post<CourseTopicPostObj>("/courses", course)
        .then((res) => res.data),
    onSuccess: (recievedObj) => console.log(recievedObj),
  });

  const courseRef = useRef<HTMLSelectElement>(null);
  const subTopicRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (courseRef.current && subTopicRef.current?.value) {
      console.log(courseRef.current.value);

      const course: Course = courses?.find(
        (course) => course.name == courseRef.current?.value
      )!;
      console.log(course);

      const subtopic: Subtopic = { subtopicName: subTopicRef.current.value };
      addCourse.mutate({ course: course, subTopics: subtopic });
      navigate("/");
    }
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <FormControl>
        <Select
          ref={courseRef as React.LegacyRef<HTMLSelectElement>}
          placeholder="Select Course"
        >
          {courses?.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </Select>
        <Input ref={subTopicRef} placeholder="enter subtopic"></Input>
        <Button colorScheme="gray" type="submit">
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default AddToExistingSubtopic;
