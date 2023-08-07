import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { TopicDataSent } from "../hooks/entities";
const TopicForm = () => {
  const slug = "slug";
  const nameRef = useRef<HTMLInputElement>(null);
  const syntaxImageRef = useRef<HTMLInputElement>(null);
  const syntaxCommentRef = useRef<HTMLInputElement>(null);
  const resultImageRef = useRef<HTMLInputElement>(null);
  const resultCommentRef = useRef<HTMLInputElement>(null);

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
        resultImageComment: resultCommentRef.current.value,
        topicSlug: slug,
      };
    }

    return (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input type="text" id="name" ref={nameRef} required />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="syntaxImage">Syntax Image:</FormLabel>
            <Input type="file" id="syntaxImage" ref={syntaxImageRef} required />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="syntaxComment">Syntax Comment:</FormLabel>
            <Input id="syntaxComment" ref={syntaxCommentRef} required />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="resultImage">Result Image:</FormLabel>
            <Input type="file" id="resultImage" ref={resultImageRef} required />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="resultComment">Result Comment:</FormLabel>
            <Input id="resultComment" ref={resultCommentRef} required />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    );
  };
};
export default TopicForm;
