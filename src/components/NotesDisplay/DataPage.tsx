import { useEffect, useState } from "react";
import useCurrentTopic from "../../HooksZustand/useCurrentTopic";
import DataCard from "./DataCard";
import { Divider, useQuery } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import apiClient from "../../hooks/apiClient";
import { Topic } from "../../hooks/entities";

const DataPage = () => {
  const { currentTopicSlug } = useCurrentTopic();
  if (!currentTopicSlug) return;
  const query = useQueryClient();
  const [topic, setTopic] = useState<Topic>();
  useEffect(() => {
    apiClient
      .get<Topic>("/topic/" + currentTopicSlug)
      .then((res) => setTopic(res.data));
  }, [currentTopicSlug]);
  return (
    <>
      <DataCard
        title={"Syntax"}
        comments={topic?.syntaxComment!}
        imageUrl={topic?.syntaxImage!}
      ></DataCard>
      <Divider />
      <DataCard
        title={"results"}
        comments={topic?.resultComment!}
        imageUrl={topic?.resultImage!}
      ></DataCard>
    </>
  );
};

export default DataPage;
