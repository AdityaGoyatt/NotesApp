import { useParams } from "react-router-dom";
import useChapters from "../hooks/useChapters";

const ChapterSelector = () => {
  const { slug: providedSlug } = useParams();
  const data = useChapters();
  const chapters = data.find((chptr) => chptr.slug === providedSlug);

  return <div>ChapterSelector</div>;
};

export default ChapterSelector;
