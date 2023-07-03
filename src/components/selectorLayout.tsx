import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const SelectorLayout = ({ children }: Props) => {
  return (
    <Flex justifyContent="center" alignItems="center" wrap="wrap" padding={70}>
      {children}
    </Flex>
  );
};

export default SelectorLayout;
