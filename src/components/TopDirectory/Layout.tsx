import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />|
  </>
);

export default Layout;
