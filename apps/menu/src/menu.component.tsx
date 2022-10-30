import React, { FunctionComponent } from "react";
import { Hamburger } from "./components/humburger.component";
import { Header } from "./components/header.component";
import { Title } from "./components/title.component";

export const Menu: FunctionComponent = () => {
  return (
    <Header>
      <Title>Micro Frontend App</Title>
      <Hamburger />
    </Header>
  );
};
