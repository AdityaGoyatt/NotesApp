import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import AddButton from "./AddButton";
import AddCourse from "../Archieves/AddCourse";
import { useState } from "react";

const NavBar = () => {
  return (
    <>
      <Box background=" linear-gradient(to right, #c33764, #1d2671)">
        <HStack justifyContent="space-between" marginX={3} paddingY={2}>
          <Image borderRadius="40%" boxSize="60px" src={logo}></Image>
          <Heading fontSize="2xl" fontFamily="Caprasimo">
            My Notes
          </Heading>
          <AddButton></AddButton>
        </HStack>
      </Box>
    </>
  );
};
export default NavBar;
