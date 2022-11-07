import React from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { styled } from '@stitches/react';

const Background = styled('div', {
  backgroundColor: '#1f8fa1',
});

const Container = styled('div', {
  backgroundColor: '#eee',
  borderRadius: '10px',
  maxWidth: '90%',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  padding: '50px 10px',
});

const Title = styled('h1', {
  fontSize: '32px',
  textAlign: 'center',
});

type Props = ReturnType<typeof useAuth>;

export const SignInForm = ({}: Props) => {
  return (
    <Background>
      <Container>
        <Title>Sign In</Title>
      </Container>
    </Background>
  );
};
