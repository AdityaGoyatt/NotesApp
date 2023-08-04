// import { Grid, GridItem, Show } from "@chakra-ui/react";
// import React, { useState } from "react";
// import TopicSelectorList from "./TopicSelectorList";
// import { useParams } from "react-router-dom";

// const MainDisplayPage = () => {
//   const [chosenTopicSlug, setChosenTopicSlug] = useState("");
//   const { topicSlug: providedSlug } = useParams();
//   console.log(chosenTopicSlug);
//   return (
//     <Grid
//       templateAreas={{
//         base: `"button-selector" "content"`,
//         lg: `"list-selector content" `,
//       }}
//     >
//       <Show below="lg">
//         <GridItem area="button-selector"></GridItem>
//       </Show>
//       <Show above="lg">
//         <GridItem area="list-selector">
//           <TopicSelectorList
//             handleClick={(chosenTopic) => setChosenTopicSlug(chosenTopic)}
//             topicSlug={providedSlug!}
//           />
//         </GridItem>
//       </Show>
//       <GridItem area="content"></GridItem>
//     </Grid>
//   );
// };

// export default MainDisplayPage;
