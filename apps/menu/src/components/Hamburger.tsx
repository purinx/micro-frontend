export { chakra } from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";
import { FunctionComponent } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";

export const Hamburger: FunctionComponent = () => {
  const disclosure = useDisclosure();

  return (
    <Center cursor="pointer" onClick={disclosure.onOpen}>
      <HamburgerIcon />
    </Center>
  );
};
