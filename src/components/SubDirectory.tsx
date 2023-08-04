import { useParams } from "react-router-dom";
import useAddingState from "../HooksZustand/useAddState";
import useCurrentDirectory from "../HooksZustand/useCurrentDirectory";
import AddSubDirectory from "./AddSubDirectory";
import PartSelector from "./PartSelector";
import { useEffect } from "react";

const SubDirectory = () => {
  const { setCurrentDirectory } = useCurrentDirectory();
  useEffect(() => {
    setCurrentDirectory("Section");
  }, []);
  const { isAdding } = useAddingState();
  const { subtopicSlug } = useParams();
  return (
    <>
      {!isAdding || <AddSubDirectory subtopicSlug={subtopicSlug!} />}
      <PartSelector subtopicSlug={subtopicSlug!} />
    </>
  );
};

export default SubDirectory;
