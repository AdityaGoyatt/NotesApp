import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";
import useCourseSubtopics from "../../hooks/useCourseSubtopics";
import { FormEvent, useRef } from "react";
import { Course, CourseTopicPostObj, Subtopic } from "../../hooks/entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../hooks/apiClient";
import useAddingState from "../../HooksZustand/useAddState";
import AddFormButton from "../Buttons/AddFormButton";

const AddDirectory = () => {
  const isHorizontal = useBreakpointValue({ base: false, lg: true });
  const query = useQueryClient();
  const { addState, changeIsAdding } = useAddingState();
  const courses = useCourseSubtopics.getAllCourses();
  const addCourse = useMutation({
    mutationFn: (course: CourseTopicPostObj) =>
      apiClient
        .post<CourseTopicPostObj>("/courses", course)
        .then((res) => res.data),
    onSuccess: (recievedPart) => {
      query.invalidateQueries({ queryKey: ["courses"] });
    },
  });

  const courseSelectRef = useRef<HTMLSelectElement>(null);
  const courseRef = useRef<HTMLInputElement>(null);
  const subTopicRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      (courseRef.current?.value || courseSelectRef.current?.value) &&
      subTopicRef.current?.value
    ) {
      const course: Course =
        addState === "Existing"
          ? courses?.find(
              (course) => course.name == courseSelectRef.current?.value
            )!
          : { name: courseRef.current!.value };
      console.log(course);
      const subtopic: Subtopic = { subtopicName: subTopicRef.current.value };
      addCourse.mutate({ course: course, subTopics: subtopic });
      changeIsAdding(false);
    }
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Box p={7}>
        {isHorizontal ? (
          <FormControl>
            <Center>
              {addState === "Existing" ? (
                <Select
                  m={4}
                  width="35vw"
                  ref={courseSelectRef as React.LegacyRef<HTMLSelectElement>}
                  placeholder="Select Course"
                >
                  {courses?.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  m={4}
                  width="35vw"
                  type="text"
                  placeholder="Enter your course"
                  ref={courseRef}
                />
              )}
              <Input
                m={4}
                width="35vw"
                ref={subTopicRef}
                placeholder="enter subtopic"
              ></Input>
              <AddFormButton />
            </Center>
          </FormControl>
        ) : (
          <FormControl marginRight={3}>
            {addState === "Existing" ? (
              <Select
                maxW="80vw"
                m={2}
                ref={courseSelectRef as React.LegacyRef<HTMLSelectElement>}
                placeholder="Select Course"
              >
                {courses?.map((course) => (
                  <option key={course.id} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                maxW="80vw"
                m={2}
                type="text"
                placeholder="Enter your course"
                ref={courseRef}
              />
            )}
            <Input
              maxW="80vw"
              m={2}
              ref={subTopicRef}
              placeholder="enter subtopic"
            ></Input>
            <AddFormButton />
          </FormControl>
        )}
      </Box>
    </form>
  );
};

export default AddDirectory;
