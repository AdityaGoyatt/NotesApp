import LanguageSelector from "./LanguageSelector";
import SelectorLayout from "./selectorLayout";
import useCourseSubtopics from "../hooks/useCourseSubtopics";
import AddDirectory from "./AddDirectory";
import useAddingState from "../HooksZustand/useAddState";
import useCurrentDirectory from "../HooksZustand/useCurrentDirectory";

const IndexPage = () => {
  const subjects = useCourseSubtopics.getAllCourses();
  const { isAdding } = useAddingState();
  const { currentDirectory } = useCurrentDirectory();

  return (
    <>
      {!(isAdding && currentDirectory === "Course") || <AddDirectory />}
      <SelectorLayout>
        {subjects?.map((subject) => (
          <LanguageSelector key={subject.name} course={subject} />
        ))}
      </SelectorLayout>
    </>
  );
};

export default IndexPage;
