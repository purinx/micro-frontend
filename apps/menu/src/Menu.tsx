import React, { FunctionComponent } from "react";
import { Hamburger } from "./components/Hamburger";
import { Header } from "./components/Header";
import { Title } from "./components/Title";

export const Menu: FunctionComponent = () => {
  return (
    <Header>
      <Title>Micro Frontend App</Title>
      <Hamburger />
    </Header>
  );
};
