import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const SelectorLayout = ({ children }: Props) => {
  return (
    <Flex h="50vh" justifyContent="center" alignItems="center" wrap="wrap">
      {children}
    </Flex>
  );
};

export default SelectorLayout;
