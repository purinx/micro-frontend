import { Center } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Title } from './components/title.component';

export const Dashboard: FunctionComponent = () => {
  return (
    <Center
      width={{ base: '100%', md: 'calc(100% - 200px)' }}
      height="calc(100vh - 44px)"
      ml={{ base: '0', md: '200px' }}
    >
      <Title>Dashboard</Title>
    </Center>
  );
};
