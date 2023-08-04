import { create } from "zustand";

interface DirectoryStore {
  currentDirectory: "Course" | "Section" | "Topic";
  setCurrentDirectory: (directory: "Course" | "Section" | "Topic") => void;
}

const useCurrentDirectory = create<DirectoryStore>((set) => ({
  currentDirectory: "Course",
  setCurrentDirectory: (newDirectory) =>
    set(() => ({ currentDirectory: newDirectory })),
}));
export default useCurrentDirectory;
