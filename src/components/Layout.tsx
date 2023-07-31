import AddCourse from "./AddCourse";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <AddCourse />
      <Outlet />
    </>
  );
};

export default Layout;
