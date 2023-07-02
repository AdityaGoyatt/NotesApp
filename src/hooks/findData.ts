import { useCallback } from "react";
import useChapters from "./useChapters";

const findChapters = (providedSlug: string) => {
  const data = useChapters();
  const chapterData = data.find((chapter) => chapter.slug === providedSlug);
};
