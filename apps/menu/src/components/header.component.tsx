import { chakra } from '@chakra-ui/react';

export const Header = chakra('div', {
  baseStyle: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
