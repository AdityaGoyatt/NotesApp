import { Grid, GridItem, Show } from "@chakra-ui/react";
import TopicSelectorList from "./TopicSelectorList";
import { useParams } from "react-router-dom";
import useTopics from "../hooks/useTopics";
import ButtonSelector from "./ButtonSelector";
import useCurrentDirectory from "../HooksZustand/useCurrentDirectory";
import { useEffect } from "react";
import useAddingState from "../HooksZustand/useAddState";

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
      <Grid
        templateAreas={{
          base: `"button-selector" "content"`,
          lg: `"list-selector content" `,
        }}
      >
        <Show below="sm">
          <GridItem area="button-selector">
            <ButtonSelector partSlug={providedSlug!}></ButtonSelector>
          </GridItem>
        </Show>
        <Show above="sm">
          <GridItem area="list-selector">
            <TopicSelectorList partSlug={providedSlug!} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default MainDisplayPage;
