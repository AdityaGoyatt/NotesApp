import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  image: string;
}

const Background = ({ children, image }: Props) => {
  return (
    <Box
      height="100vh"
      background="radial-gradient( circle farthest-corner at 90% 95%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )"
      backgroundSize="cover"
      bgRepeat="repeat"
      backgroundPosition="center center"
    >
      {children}
    </Box>
  );
};

export default Background;
