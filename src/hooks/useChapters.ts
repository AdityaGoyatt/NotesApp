import { chaptersObject } from "../entities";

const chapters: chaptersObject[] = [
  { slug: "java-basic", chapters: [{ name: "", slug: "" }] },
];

const useChapters = () => {
  return chapters;
};

export default useChapters;
