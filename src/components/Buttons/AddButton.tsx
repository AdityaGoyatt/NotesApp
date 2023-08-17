import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import useAddingState from "../../HooksZustand/useAddState";
import useCurrentDirectory from "../../HooksZustand/useCurrentDirectory";

const AddButton = () => {
  const { changeIsAdding, changeAddingState, isAdding } = useAddingState();
  const { currentDirectory } = useCurrentDirectory();
  return (
    <Menu>
      <MenuButton as={Button} variant="outline">
        Add Notes
      </MenuButton>
      <MenuList>
        {!(currentDirectory === "Course") || (
          <>
            <MenuItem
              onClick={() => {
                changeIsAdding(true);
                changeAddingState("New");
              }}
            >
              New {currentDirectory}
            </MenuItem>
            <MenuItem
              onClick={() => {
                changeIsAdding(true);
                changeAddingState("Existing");
              }}
            >
              Existing {currentDirectory}
            </MenuItem>
          </>
        )}
        {!(currentDirectory === "Section") || (
          <MenuItem
            onClick={() => {
              changeIsAdding(true);
            }}
          >
            New {currentDirectory}
          </MenuItem>
        )}
        {!(currentDirectory === "Topic") || (
          <MenuItem
            onClick={() => {
              changeIsAdding(true);
            }}
          >
            New {currentDirectory}
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default AddButton;
