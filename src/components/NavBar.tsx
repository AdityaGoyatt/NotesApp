import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeButton from "./DarkModeButton";
import AddButton from "./AddButton";

const NavBar = () => (
  <>
    <Box background=" linear-gradient(to right, #c33764, #1d2671)">
      <HStack justifyContent="space-between" marginX={3} paddingY={2}>
        <Image borderRadius="40%" boxSize="60px" src={logo}></Image>
        <Heading fontSize="2xl" fontFamily="Caprasimo">
          My Notes
        </Heading>
        {/* <VStack> */}
        <AddButton directoryLevel={"Course"}></AddButton>
        {/* <DarkModeButton /> */}
        {/* </VStack> */}
      </HStack>
    </Box>
  </>
);
export default NavBar;
