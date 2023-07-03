import { codeNotes } from "../entities";

const allNotes: codeNotes[] = [
  {
    slug: "",
    mainData: { code: "", description: "", output: "", comments: "" },
  },
];

const useMainContent = (providedSlug: string) => {
  return allNotes.find((note) => note.slug === providedSlug);
};

export default useMainContent;
