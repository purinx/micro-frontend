import React from 'react';
import { useSignIn } from '../../hooks/useSignIn';
import { Background, Container, Title, Label, Input, Button } from '../atoms';

export const SignInPage = () => {
  const props = useSignIn();
  return (
    <Background>
      <Container>
        <Title>Sign In</Title>
        <Label>
          Email
          <Input value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
        </Label>
        <Label>
          Password
          <Input value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
        </Label>
        <Button type="submit" onClick={props.handleLogin}>
          Submit
        </Button>
      </Container>
    </Background>
  );
};
