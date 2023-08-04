import { useQuery } from "@tanstack/react-query";
import { Part, Subtopic } from "./entities";
import apiClient from "./apiClient";

const useParts = (subtopicSlug: string) =>
  useQuery<Part[]>({
    queryKey: ["Parts"],
    queryFn: () =>
      apiClient
        .get<Part[]>("/Subtopic/" + subtopicSlug)
        .then((res) => res.data),
  });

export default useParts;
