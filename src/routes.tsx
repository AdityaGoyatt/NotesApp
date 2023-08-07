import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./components/IndexPage";
import ErrorPage from "./components/ErrorPage";
import PartSelector from "./components/PartSelector";
import SubDirectory from "./components/SubDirectory";
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
