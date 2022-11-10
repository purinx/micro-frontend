import { Button } from '@chakra-ui/react';
import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Background, Title } from '../atoms';

export const HomePage = () => {
  const user = useUser();

  return (
    <Background>
      <Title>Hey! {user.user_metadata.name}</Title>
      <Button disabled>Sign out</Button>
    </Background>
  );
};
