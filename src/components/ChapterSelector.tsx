import { Link, useParams } from "react-router-dom";
import useChapters from "../hooks/useChapters";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import SelectorLayout from "./selectorLayout";

const ChapterSelector = () => {
  const { chapterSlug: paramSlug } = useParams();
  const chapterData = useChapters(paramSlug!);

  return (
    <>
      <SelectorLayout>
        {chapterData?.chapters.map((chapter) => (
          <Link to={`/${paramSlug}/${chapter.slug}`}>
            <Button margin="30px" w="25vh" size="lg" colorScheme="facebook">
              {chapter.name}
            </Button>
          </Link>
        ))}
      </SelectorLayout>

      {chapterData?.underDevelopment ? (
        <Center>
          <Heading fontSize="lg" fontFamily="caprasimo">
            This Page is currently under development
          </Heading>
        </Center>
      ) : null}
    </>
  );
};

export default ChapterSelector;
