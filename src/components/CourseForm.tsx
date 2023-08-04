import AddCourse from "../Archieves/AddCourse";
import Background from "./Background";
import IndexPage from "./IndexPage";
import galaxy from "../assets/mainbg.jpg";
const CourseForm = () => {
  return (
    <Background image={galaxy}>
      <AddCourse />
      <IndexPage />
    </Background>
  );
};

export default CourseForm;
