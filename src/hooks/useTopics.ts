import { useQuery } from "@chakra-ui/react";
interface Topic {
  topicSlug: string;
  name: string;
  syntaxImage: string;
  syntaxComment: string;
  resultImage: string;
}

const useTopics = (partSlug: string) => {
  useQuery<Topic[]>;
};
