import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./components/SubjectSelector";
import ChapterSelector from "./components/ChapterSelector";
import ErrorPage from "./components/ErrorPage";
import MainDisplayPage from "./components/MainDisplayPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/:chapterSlug",
        element: <ChapterSelector />,
      },
      { path: "/:chapterSlug/:topicSlug", element: <MainDisplayPage /> },
    ],
  },
]);

export default router;
