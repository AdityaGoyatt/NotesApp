import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

export default router;
