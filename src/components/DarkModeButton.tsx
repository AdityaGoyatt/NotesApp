import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const DarkModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="orange"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      ></Switch>
    </HStack>
  );
};

export default DarkModeButton;
