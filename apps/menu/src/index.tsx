import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import { Menu } from './menu.component';
import { menuTheme } from './theme';

const Root = () => (
  <ChakraProvider theme={menuTheme}>
    <Menu />
  </ChakraProvider>
);

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
      <>
        <h2>{err.name}</h2>
        <p>{err.message}</p>
        <p>{err.stack}</p>
      </>
    );
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
