import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./components/IndexPage";
import SubTopicSelector from "./components/SubTopicSelector";
import ChapterSelector from "./components/ChapterSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/:slug",
        element: <ChapterSelector />,
      },
    ],
  },
]);

export default router;
