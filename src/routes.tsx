import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/TopDirectory/Layout";
import IndexPage from "./components/TopDirectory/IndexPage";
import ErrorPage from "./components/TopDirectory/ErrorPage";
import PartSelector from "./components/SubDirectory/PartSelector";
import SubDirectory from "./components/SubDirectory/SubDirectory";
import MainDisplayPage from "./components/NotesDisplay/MainDisplayPage";

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
        path: "/:subtopicSlug",
        element: <SubDirectory />,
      },
      {
        path: "/subtopic/:partSlug",
        element: <MainDisplayPage />,
      },
    ],
  },
]);

export default router;
