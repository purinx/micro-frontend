import React, { FunctionComponent } from 'react';
export { chakra } from '@chakra-ui/system';
import { Center } from '@chakra-ui/layout';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/hooks';

export const Hamburger: FunctionComponent = () => {
  const disclosure = useDisclosure();

  return (
    <Center cursor="pointer" onClick={disclosure.onOpen} padding="10px">
      <HamburgerIcon />
    </Center>
  );
};
