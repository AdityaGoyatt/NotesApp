import LanguageSelector from "./LanguageSelector";
import useSubjects from "../hooks/useSubjects";
import SelectorLayout from "./selectorLayout";
import useCourse from "../hooks/useCourse";

const IndexPage = () => {
  const subjects = useCourse.getCourses();

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
