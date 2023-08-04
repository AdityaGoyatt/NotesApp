import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import galaxy from "../assets/mainbg.jpg";
import Background from "./Background";

const Layout = () => (
  <>
    <NavBar />
    <Background image={galaxy}>
      <Outlet />|
    </Background>
  </>
);

export default Layout;
