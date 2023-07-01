import LanguageSelector from "./LanguageSelector";
import useSubjects from "../hooks/useSubjects";
import { Flex } from "@chakra-ui/react";

const IndexPage = () => {
  const subjects = useSubjects();

  return (
    <>
      <Flex h="50vh" justifyContent="center" alignItems="center" wrap="wrap">
        {subjects.map((subject) => (
          <LanguageSelector key={subject.name} itemList={subject} />
        ))}
        {/* </SimpleGrid> */}
      </Flex>
    </>
  );
};

export default IndexPage;
