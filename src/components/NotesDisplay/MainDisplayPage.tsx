import { Center, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import TopicSelectorList from "./TopicSelectorList";
import { useParams } from "react-router-dom";
import ButtonSelector from "./ButtonSelector";
import useCurrentDirectory from "../../HooksZustand/useCurrentDirectory";
import { useEffect, useState } from "react";
import useAddingState from "../../HooksZustand/useAddState";
import AddTopic from "./AddTopic";
import DarkModeButton from "../Buttons/DarkModeButton";
import useTopics from "../../hooks/useTopics";
import useCurrentTopic from "../../HooksZustand/useCurrentTopic";
import DataPage from "./DataPage";
import blankImage from "../../assets/colorblast.png";
import DataCard from "./DataCard";

const MainDisplayPage = () => {
  const { setCurrentDirectory } = useCurrentDirectory();
  const { currentTopicSlug, setCurrentTopicSlug } = useCurrentTopic();
  useEffect(() => {
    setCurrentDirectory("Topic");
  }, []);

  const { isAdding } = useAddingState();
  const { partSlug: providedSlug } = useParams();

  return (
    <>
      {!isAdding || (
        <>
          <AddTopic topicSlug={providedSlug!} />
        </>
      )}
      <Grid
        templateAreas={{
          base: `"button-selector button-selector"
         "content content"`,

          lg: `"list-selector content"`,
        }}
      >
        <Show below="lg">
          <GridItem area="button-selector">
            <HStack justifyContent="space-between" marginX={3} paddingY={2}>
              <ButtonSelector partSlug={providedSlug!}></ButtonSelector>
              <DarkModeButton />
            </HStack>
          </GridItem>
        </Show>
        {currentTopicSlug ? (
          <GridItem area="content">
            <DataPage />
          </GridItem>
        ) : (
          <>
            <GridItem area="content">
              <DataCard
                title="Please Select a topic"
                comments=""
                imageUrl={blankImage}
              ></DataCard>
            </GridItem>
          </>
        )}
        <Show above="lg">
          <GridItem area="list-selector">
            <TopicSelectorList partSlug={providedSlug!} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default MainDisplayPage;
