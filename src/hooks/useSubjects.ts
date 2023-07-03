import subjectsData from "../assets/storedData/subjectsData";
import { subjectQuery } from "../entities";

const subjects: subjectQuery[] = subjectsData;

const useSubjects = () => {
  return subjects;
};
export default useSubjects;
