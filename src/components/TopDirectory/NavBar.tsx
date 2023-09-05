import { Box, HStack, Heading, Image, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import AddButton from "../Buttons/AddButton";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Box background=" linear-gradient(to right, #c33764, #1d2671)">
        <HStack justifyContent="space-between" marginX={3} paddingY={2}>
          <Image
            onClick={toggleColorMode}
            borderRadius="40%"
            boxSize="60px"
            src={logo}
          ></Image>
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
