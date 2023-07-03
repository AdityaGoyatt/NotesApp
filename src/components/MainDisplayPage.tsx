import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const MainDisplayPage = () => {
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
        <GridItem area="list-selector"></GridItem>
      </Show>
      <GridItem area="content"></GridItem>
    </Grid>
  );
};

export default MainDisplayPage;
