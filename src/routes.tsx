import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./components/IndexPage";
import ErrorPage from "./components/ErrorPage";
import CourseForm from "./components/CourseForm";
import ExistingCourseForm from "./components/ExistingCourseForm";

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
        path: "CourseForm",
        element: <CourseForm />,
      },
      {
        path: "ExistingCourseForm",
        element: <ExistingCourseForm />,
      },
    ],
  },
]);

export default router;
