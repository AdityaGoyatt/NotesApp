import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeButton from "./DarkModeButton";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX={3} paddingY={2}>
      <Image borderRadius="40%" boxSize="80px" src={logo}></Image>
      <Heading fontSize="3xl" fontFamily="Caprasimo">
        My Notes
      </Heading>
      <DarkModeButton />
    </HStack>
  );
};
export default NavBar;
