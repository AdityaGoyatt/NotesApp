import { Link, useParams } from "react-router-dom";
import useChapters from "../hooks/useChapters";
import { Button } from "@chakra-ui/react";
import SelectorLayout from "./selectorLayout";

const ChapterSelector = () => {
  const { slug: paramSlug } = useParams();
  const chapterData = useChapters(paramSlug!);

  return (
    <>
      <SelectorLayout>
        {chapterData?.chapters.map((chapter) => (
          <Link to="/">
            <Button margin="30px" w="25vh" size="lg" colorScheme="facebook">
              {chapter.name}
            </Button>
          </Link>
        ))}
      </SelectorLayout>
    </>
  );
};

export default ChapterSelector;
