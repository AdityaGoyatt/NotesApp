import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
interface Props {
  directoryLevel: String;
}

const AddButton = ({ directoryLevel }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline">
        Add Notes
      </MenuButton>
      <MenuList>
        <MenuItem>New {directoryLevel}</MenuItem>
        <MenuItem>Existing {directoryLevel}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AddButton;
