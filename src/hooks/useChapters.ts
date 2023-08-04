import chapterStoredData from "../assets/storedData/chapterStoredData";
import { chaptersObject } from "../entities";

const chaptersSample: chaptersObject[] = [
  {
    slug: "java-basic",

    chapters: [
      { name: "Types", slug: "java-types" },
      { name: "Control Flow", slug: "java-control-flow" },
      { name: "Deploynment", slug: "java-deploynment" },
    ],
  },
  {
    slug: "",
    chapters: [
      { name: "", slug: "" },
      { name: "", slug: "" },
      { name: "", slug: "" },
      { name: "", slug: "" },
      { name: "", slug: "" },
    ],
  },
];

const chapters: chaptersObject[] = chapterStoredData;

const useChapters = (providedSlug: string) => {
  return chapters.find((chapterData) => chapterData.slug === providedSlug);
};

export default useChapters;
