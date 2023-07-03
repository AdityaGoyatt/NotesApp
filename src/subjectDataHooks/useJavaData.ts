import JavaNotes from "../JavaData/notes/types/JavaNotes";
const notes = [...JavaNotes];
const useJavaData = (slug: string) => {
  return notes.find((code) => code.slug === slug);
};

export default useJavaData;
