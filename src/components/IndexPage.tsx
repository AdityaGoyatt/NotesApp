import LanguageSelector from "./LanguageSelector";
import SelectorLayout from "./selectorLayout";
import useCourseSubtopics from "../hooks/useCourseSubtopics";
import AddDirectory from "./AddDirectory";
import useAddingState from "../HooksZustand/useAddState";

const IndexPage = () => {
  const subjects = useCourseSubtopics.getAllCourses();
  const { isAdding } = useAddingState();

  return (
    <>
      {!isAdding || <AddDirectory />}
      <SelectorLayout>
        {subjects?.map((subject) => (
          <LanguageSelector key={subject.name} course={subject} />
        ))}
      </SelectorLayout>
    </>
  );
};

export default IndexPage;
