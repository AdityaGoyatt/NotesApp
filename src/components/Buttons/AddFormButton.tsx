import { Button } from "@chakra-ui/react";

const AddFormButton = () => {
  return (
    <Button
      bgGradient="linear-gradient(to right, #c33764, #1d2671)"
      type="submit"
      m={2}
      minWidth="25vw"
      colorScheme="gray"
    >
      Add
    </Button>
  );
};

export default AddFormButton;
