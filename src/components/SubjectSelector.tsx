import LanguageSelector from "./LanguageSelector";
import useSubjects from "../hooks/useSubjects";
import SelectorLayout from "./selectorLayout";

const IndexPage = () => {
  const subjects = useSubjects();

  return (
    <>
      <SelectorLayout>
        {subjects.map((subject) => (
          <LanguageSelector key={subject.name} itemList={subject} />
        ))}
      </SelectorLayout>
    </>
  );
};

export default IndexPage;
