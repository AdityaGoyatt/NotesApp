import useJavaData from "../subjectDataHooks/useJavaData";

const useCodeFinder = (slug: string) => {
  switch (slug.substring(0, 4)) {
    case "java":
      return useJavaData(slug);
  }
};

export default useCodeFinder;
