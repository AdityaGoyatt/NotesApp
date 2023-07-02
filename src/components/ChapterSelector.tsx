import { Link, useParams } from "react-router-dom";
import useChapters from "../hooks/useChapters";
import { Button } from "@chakra-ui/react";
import SelectorLayout from "./selectorLayout";

const ChapterSelector = () => {
  const { slug: providedSlug } = useParams();
  const data = useChapters();
  const chapterData = data.find((chptr) => chptr.slug === providedSlug);
  //   if (!chapterData) return <ErrorPage />;
  return (
    <>
      <SelectorLayout>
        {chapterData?.chapters.map((chapter) => (
          <Link to="/">
            <Button colorScheme="facebook">{chapter.name}</Button>
          </Link>
        ))}
      </SelectorLayout>
    </>
  );
};

export default ChapterSelector;
