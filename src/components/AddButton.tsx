import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
interface Props {
  directoryLevel: String;
}

const AddButton = ({ directoryLevel }: Props) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton as={Button} variant="outline">
        Add Notes
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate("/CourseForm")}>
          New {directoryLevel}
        </MenuItem>
        <MenuItem onClick={() => navigate("/ExistingCourseForm")}>
          Existing {directoryLevel}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AddButton;
