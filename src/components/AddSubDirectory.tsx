import {
  Box,
  Button,
  FormControl,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import useAddingState from "../HooksZustand/useAddState";
import { useParams } from "react-router-dom";
import { FormEvent, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../hooks/apiClient";
import { Part } from "../hooks/entities";
import AddFormButton from "./AddFormButton";
import useCourseSubtopics from "../hooks/useCourseSubtopics";

interface Props {
  subtopicSlug: string;
}
const AddSubDirectory = ({ subtopicSlug }: Props) => {
  const isHorizontal = useBreakpointValue({ base: false, lg: true });
  const { changeIsAdding } = useAddingState();
  const query = useQueryClient();
  const subTopic = useCourseSubtopics.getSubTopicBySlug(subtopicSlug);
  const partRef = useRef<HTMLInputElement>(null);
  const addSection = useMutation({
    mutationFn: (part: Part) =>
      apiClient.post<Part>("/part", part).then((res) => res.data),
    onSuccess: (recievedPart) => {
      query.invalidateQueries({ queryKey: ["Parts"] });
      changeIsAdding(false);
    },
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (partRef.current?.value && subTopic) {
      const part: Part = {
        partName: partRef.current.value,
        subTopic: subTopic,
      };

      addSection.mutate(part);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Box p={7}>
        <FormControl>
          <Input ref={partRef} placeholder="enter name of new section" />
          <AddFormButton />
        </FormControl>
      </Box>
    </form>
  );
};

export default AddSubDirectory;
