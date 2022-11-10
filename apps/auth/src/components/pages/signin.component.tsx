import React from 'react';
import { chakra } from '@chakra-ui/react';
import { useSignIn } from '../../hooks/useAuth';

const Background = chakra('div', {
  baseStyle: {
    paddingY: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { md: 'calc(100% - 200px)' },
    height: { base: '2050px', md: 'calc(100vh - 44px)' },
    ml: { base: '0', md: '200px' },
  },
});

const Container = chakra('div', {
  baseStyle: {
    backgroundColor: '#eee',
    borderRadius: '10px',
    maxWidth: '90%',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    padding: '50px',
    margin: 'auto',
    '*': {
      color: '#2aaf2f',
    },
  },
});

const Title = chakra('h1', {
  baseStyle: {
    fontSize: '32px',
    textAlign: 'center',
    color: '#2aaf2f',
  },
});

const Input = chakra('input', {
  baseStyle: {
    border: '1px solid #2aaf2f',
    borderRadius: '4px',
    height: '40px',
    width: '100%',
    color: '#2aaf2f',
    px: '10px',
  },
});

const Label = chakra('label', {
  baseStyle: {
    color: '#2aaf2f',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
});

const Button = chakra('button', {
  baseStyle: {
    color: 'white',
    bgColor: '#2aaf2f',
    borderRadius: '4px',
    width: '200px',
    height: '50px',
    fontSize: '18px',
    alignSelf: 'center',
    mt: '20px',
    fontWeight: 'bold',
  },
});

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
