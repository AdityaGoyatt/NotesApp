import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { Topic, TopicDataSent } from "../hooks/entities";
import AddButton from "./AddButton";
import AddFormButton from "./AddFormButton";
import { maxWidth } from "../hooks/reusableValues";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../hooks/apiClient";
import useAddingState from "../HooksZustand/useAddState";
interface Props {
  topicSlug: string;
}
const AddTopic = ({ topicSlug: partSlug }: Props) => {
  const slug = "abcd";

  const query = useQueryClient();
  const { changeIsAdding } = useAddingState();
  const nameRef = useRef<HTMLInputElement>(null);
  const syntaxImageRef = useRef<HTMLInputElement>(null);
  const syntaxCommentRef = useRef<HTMLTextAreaElement>(null);
  const resultImageRef = useRef<HTMLInputElement>(null);
  const resultCommentRef = useRef<HTMLTextAreaElement>(null);

  const mutation = useMutation({
    mutationFn: (topic: TopicDataSent) =>
      apiClient
        .post<TopicDataSent>("/topic", topic, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
    onSuccess: (recievedPart) => {
      query.invalidateQueries({ queryKey: ["Topics"] });
      changeIsAdding(false);
    },
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      nameRef.current &&
      syntaxImageRef.current?.files &&
      syntaxCommentRef.current &&
      resultCommentRef.current &&
      resultImageRef.current?.files
    ) {
      const formData: TopicDataSent = {
        name: nameRef.current.value,
        syntaxImage: syntaxImageRef.current.files[0],
        syntaxComment: syntaxCommentRef.current.value,
        resultImage: resultImageRef.current.files[0],
        resultComment: resultCommentRef.current.value,
        partSlug: slug,
      };
      console.log(formData);

      mutation.mutate(formData);
    }
  };

  return (
    <Box alignContent="center" p="14">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <HStack mb={4} maxWidth={maxWidth}>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input type="text" id="name" ref={nameRef} required />
          </HStack>

          <FormControl mb={4}>
            <HStack>
              <Input type="file" ref={syntaxImageRef} display="none" />
              <Button onClick={() => syntaxImageRef.current?.click()}>
                Add Syntax Image
              </Button>
            </HStack>
          </FormControl>

          <FormControl mb={4} maxWidth={maxWidth}>
            <FormLabel htmlFor="syntaxComment">Syntax Comment:</FormLabel>
            <Textarea id="syntaxComment" ref={syntaxCommentRef} required />
          </FormControl>

          <HStack mb={4}>
            <Input type="file" ref={resultImageRef} display="none" />
            <Button onClick={() => resultImageRef.current?.click()}>
              Add Result Image
            </Button>
          </HStack>

          <FormControl mb={4} maxWidth={maxWidth}>
            <FormLabel htmlFor="resultComment">Result Comment:</FormLabel>
            <Textarea id="resultComment" ref={resultCommentRef} required />
          </FormControl>

          <Center>
            <AddFormButton />
          </Center>
        </FormControl>
      </form>
    </Box>
  );
};
export default AddTopic;
