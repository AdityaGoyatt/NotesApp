import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAddingState from "../HooksZustand/useAddState";
interface Props {
  directoryLevel: String;
}

const AddButton = ({ directoryLevel }: Props) => {
  const { changeIsAdding, changeAddingState } = useAddingState();
  return (
    <Menu>
      <MenuButton as={Button} variant="outline">
        Add Notes
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            changeIsAdding(true);
            changeAddingState("New");
          }}
        >
          New {directoryLevel}
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeIsAdding(true);
            changeAddingState("Existing");
          }}
        >
          Existing {directoryLevel}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AddButton;
