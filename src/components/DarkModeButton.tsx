import { HStack, Heading, Switch, useColorMode } from "@chakra-ui/react";

const DarkModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Heading fontSize={"sm"}>Dark Mode</Heading>
      <Switch
        colorScheme="orange"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      ></Switch>
    </HStack>
  );
};

export default DarkModeButton;
