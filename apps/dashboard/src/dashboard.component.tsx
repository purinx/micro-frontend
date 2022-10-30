import { Center } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Title } from './components/title.component';

export const Dashboard: FunctionComponent = () => {
  return (
    <Center width="100%" height="calc(100vh - 44px)">
      <Title>Dashboard</Title>
    </Center>
  );
};
