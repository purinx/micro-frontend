import React, { FunctionComponent } from 'react';
import { Hamburger } from './components/humburger.component';
import { Header } from './components/header.component';
import { Title } from './components/title.component';
import { Box, Flex } from '@chakra-ui/react';
import { Github } from './components/github.component';

export const Menu: FunctionComponent = () => {
  return (
    <>
      {/* space-between: chakra-ui bug */}
      <Header style={{ justifyContent: 'space-between' }}>
        <Flex>
          <Title>Micro Frontend App</Title>
          <Github />
        </Flex>
        <Hamburger />
      </Header>
      <Box width="100vw" height="44px" />
    </>
  );
};
