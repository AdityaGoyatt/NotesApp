import AddCourse from "./AddCourse";
import Background from "./Background";
import IndexPage from "./IndexPage";

import galaxy from "../assets/mainbg.jpg";
import AddToExistingSubtopic from "./AddToExistingSubtopic";

const ExistingCourseForm = () => {
  return (
    <Background image={galaxy}>
      <AddToExistingSubtopic />
      <IndexPage />
    </Background>
  );
};

export default ExistingCourseForm;
