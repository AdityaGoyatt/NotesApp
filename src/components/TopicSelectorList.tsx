// import { Button, VStack, List } from "@chakra-ui/react";

// import useTopics from "../hooks/useTopics";

// interface Props {
//   handleClick: (chosenTopic: string) => void;
//   topicSlug: string;
// }
// const TopicSelectorList = ({ handleClick, topicSlug }: Props) => {
//   const topics = useTopics(topicSlug);
//   return (
//     <List>
//       <VStack>
//         {topics?.topicsArray.map((topic) => (
//           <Button
//             margin="5px"
//             w="25vh"
//             size="lg"
//             onClick={() => handleClick(topic.slug)}
//           >
//             {topic.name}
//           </Button>
//         ))}
//       </VStack>
//     </List>
//   );
// };

// export default TopicSelectorList;
