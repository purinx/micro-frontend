import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Menu } from './Menu';

const Root = () => (
  <ChakraProvider>
    <Menu />
  </ChakraProvider>
);

export default singleSpaReact({
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
