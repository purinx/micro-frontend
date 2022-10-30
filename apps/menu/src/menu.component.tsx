import React, { FunctionComponent } from 'react';
import { Hamburger } from './components/humburger.component';
import { Header } from './components/header.component';
import { Title } from './components/title.component';
import { Box } from '@chakra-ui/react';

export const Menu: FunctionComponent = () => {
  return (
    <>
      {/* space-between: chakra-ui bug */}
      <Header style={{ justifyContent: 'space-between' }}>
        <Title>Micro Frontend App</Title>
        <Hamburger />
      </Header>
      <Box width="100vw" height="44px" />
    </>
  );
};
