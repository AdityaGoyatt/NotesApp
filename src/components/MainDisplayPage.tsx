import { Center, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import TopicSelectorList from "./TopicSelectorList";
import { useParams } from "react-router-dom";
import useTopics from "../hooks/useListTopics";
import ButtonSelector from "./ButtonSelector";
import useCurrentDirectory from "../HooksZustand/useCurrentDirectory";
import { useEffect } from "react";
import useAddingState from "../HooksZustand/useAddState";
import AddTopic from "./AddTopic";
import DarkModeButton from "./DarkModeButton";

const MainDisplayPage = () => {
  const { setCurrentDirectory } = useCurrentDirectory();
  useEffect(() => {
    setCurrentDirectory("Topic");
  }, []);
  const { isAdding } = useAddingState();
  const { partSlug: providedSlug } = useParams();
  console.log(providedSlug);
  console.log(useTopics.getTopics(providedSlug!));

  return (
    <>
      {!isAdding || (
        <>
          <AddTopic topicSlug={providedSlug!} />
        </>
      )}
      <Grid
        templateAreas={{
          base: `"button-selector" "content"`,
          lg: `"list-selector content" `,
        }}
      >
        <Show below="sm">
          <GridItem area="button-selector">
            <HStack justifyContent="space-between" marginX={3} paddingY={2}>
              <ButtonSelector partSlug={providedSlug!}></ButtonSelector>
              <DarkModeButton />
            </HStack>
          </GridItem>
        </Show>
        <Show above="sm">
          <GridItem area="list-selector" m={5}>
            <TopicSelectorList partSlug={providedSlug!} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default MainDisplayPage;
