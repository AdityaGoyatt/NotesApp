import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import useCourse, { Course } from "../hooks/useCourse";
import { useState } from "react";
const AddCourse = () => {
  const courseDriver = useCourse;
  const [course, setCourse] = useState<Course>({
    id: 0,
    course: "",
  });
  const submit = () => {
    if (course) courseDriver.addCourse(course);
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <FormControl mb={4}>
          <FormLabel>Course</FormLabel>
          <Input
            type="text"
            placeholder="Enter your course"
            onChange={(event) =>
              setCourse({ ...course, course: event.target.value })
            }
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddCourse;
