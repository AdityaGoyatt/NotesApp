import { subjectQuery } from "../entities";

const subjects: subjectQuery[] = [
  {
    name: "Java",
    MajorTopics: [
      { name: "Basic", slug: "java-basic" },
      { name: "Object Oriented", slug: "java-object-oriented" },
      { name: "Advanced", slug: "java-advanced" },
    ],
  },
  { name: "React", MajorTopics: [{ name: "", slug: "" }] },
  { name: "JavaScript", MajorTopics: [{ name: "", slug: "" }] },
  { name: "DataStructure", MajorTopics: [{ name: "", slug: "" }] },
  { name: "Spring", MajorTopics: [{ name: "", slug: "" }] },
];

const useSubjects = () => {
  return subjects;
};
export default useSubjects;
