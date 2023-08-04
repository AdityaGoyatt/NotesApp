import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./components/IndexPage";
import ErrorPage from "./components/ErrorPage";

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
    ],
  },
]);

export default router;
