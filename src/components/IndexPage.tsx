import LanguageSelector from "./LanguageSelector";
import SelectorLayout from "./selectorLayout";
import useCourseSubtopics from "../hooks/useCourseSubtopics";

const IndexPage = () => {
  const subjects = useCourseSubtopics.getAllCourses();

  return (
    <>
      <SelectorLayout>
        {subjects?.map((subject) => (
          <LanguageSelector key={subject.name} course={subject} />
        ))}
      </SelectorLayout>
    </>
  );
};

export default IndexPage;
