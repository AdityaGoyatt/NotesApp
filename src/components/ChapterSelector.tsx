import { useParams } from "react-router-dom";

const ChapterSelector = () => {
  const { slug: providedSlug } = useParams();

  return <div>ChapterSelector</div>;
};

export default ChapterSelector;
