import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from './components/pages/signin.component';
import { UserProvider } from './hooks/useUser';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './components/pages/home.component';

const Root = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/micro-frontend/auth">
          <Route path="signin" element={<SignInPage />} />
          <Route
            path="home"
            element={
              <UserProvider>
                <HomePage />
              </UserProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
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
