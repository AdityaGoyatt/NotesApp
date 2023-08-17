import { Link, useParams } from "react-router-dom";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import SelectorLayout from "../TopDirectory/selectorLayout";
import useParts from "../../hooks/useParts";

interface Props {
  subtopicSlug: string;
}
const PartSelector = ({ subtopicSlug }: Props) => {
  const partsList = useParts(subtopicSlug).data;

  return (
    <>
      <SelectorLayout>
        {partsList?.map((part) => (
          <Link key={part.partSlug + "link"} to={`/subtopic/${part.partSlug}`}>
            <Button
              key={part.partSlug}
              margin="30px"
              w="25vh"
              size="lg"
              colorScheme="facebook"
            >
              {part.partName}
            </Button>
          </Link>
        ))}
      </SelectorLayout>

      {!partsList ? (
        <Center>
          <Heading fontSize="lg" fontFamily="caprasimo">
            This Page is currently under development
          </Heading>
        </Center>
      ) : null}
    </>
  );
};

export default PartSelector;
