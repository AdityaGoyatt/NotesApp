import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import galaxy from "../assets/mainbg.jpg";

const Layout = () => (
  <>
    <NavBar />
    <Box
      height="700px"
      backgroundImage={galaxy}
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Outlet />|
    </Box>
  </>
);

export default Layout;
