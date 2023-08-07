import { Grid, GridItem, Show } from "@chakra-ui/react";
import TopicSelectorList from "./TopicSelectorList";
import { useParams } from "react-router-dom";
import useTopics from "../hooks/useTopics";

const MainDisplayPage = () => {
  const { partSlug: providedSlug } = useParams();
  console.log(providedSlug);
  console.log(useTopics.getTopics(providedSlug!));

  return (
    <Grid
      templateAreas={{
        base: `"button-selector" "content"`,
        lg: `"list-selector content" `,
      }}
    >
      <Show below="lg">
        <GridItem area="button-selector"></GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="list-selector">
          <TopicSelectorList partSlug={providedSlug!} />
        </GridItem>
      </Show>
      <GridItem area="content"></GridItem>
    </Grid>
  );
};

export default MainDisplayPage;
