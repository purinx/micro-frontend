import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React, { FunctionComponent, useEffect } from 'react';
import { navigateToUrl } from 'single-spa';

import { Hamburger } from './components/humburger.component';
import { Header } from './components/header.component';
import { Title } from './components/title.component';
import { Github } from './components/github.component';
import { Sidebar } from './components/sidebar.component';
import { NavItem } from './components/NavItem';

export const Menu: FunctionComponent = () => {
  const [isMobile] = useMediaQuery('(max-width: 530px)');

  return (
    <>
      {/* justify-content: chakra-ui bug */}
      <Header style={{ justifyContent: 'space-between' }}>
        <Flex>
          <Title>Micro Frontend App</Title>
          <Github />
        </Flex>
        {isMobile && <Hamburger />}
      </Header>
      <Box width="100vw" height="44px" />
      {!isMobile && (
        <>
          <Sidebar>
            <NavItem href="/micro-frontend" onClick={navigateToUrl}>
              Dashboard
            </NavItem>
            <NavItem href="/micro-frontend/auth/signin" onClick={navigateToUrl}>
              Sign In
            </NavItem>
            <NavItem href="/micro-frontend/other" onClick={navigateToUrl}>
              Other
            </NavItem>
          </Sidebar>
        </>
      )}
    </>
  );
};
