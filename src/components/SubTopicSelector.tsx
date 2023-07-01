import { useParams } from "react-router-dom";

const SubTopicSelector = () => {
  const { slug } = useParams();

  return <div>SubTopicSelector</div>;
};

export default SubTopicSelector;
