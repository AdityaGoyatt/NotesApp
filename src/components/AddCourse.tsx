import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import useCourse, { Course } from "../hooks/useCourse";
import { FormEvent, useRef, useState } from "react";
const AddCourse = () => {
  const courseDriver = useCourse;
  const courseRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (courseRef.current) {
      console.log("sending");

      courseDriver.addCourse(courseRef.current.value);
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormControl mb={4}>
          <FormLabel>Course</FormLabel>
          <Input type="text" placeholder="Enter your course" ref={courseRef} />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddCourse;
