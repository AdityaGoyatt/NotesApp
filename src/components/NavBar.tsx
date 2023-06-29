import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image borderRadius="40%" padding={2} boxSize="80px" src={logo}></Image>
    </HStack>
  );
};

export default NavBar;
