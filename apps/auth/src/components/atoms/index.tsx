import { chakra } from '@chakra-ui/react';

export const Background = chakra('div', {
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

export const Container = chakra('div', {
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

export const Title = chakra('h1', {
  baseStyle: {
    fontSize: '32px',
    textAlign: 'center',
    color: '#2aaf2f',
  },
});

export const Input = chakra('input', {
  baseStyle: {
    border: '1px solid #2aaf2f',
    borderRadius: '4px',
    height: '40px',
    width: '100%',
    color: '#2aaf2f',
    px: '10px',
  },
});

export const Label = chakra('label', {
  baseStyle: {
    color: '#2aaf2f',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
});

export const Button = chakra('button', {
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
