import { chakra } from '@chakra-ui/react';

export const Sidebar = chakra('div', {
  baseStyle: {
    paddingTop: '20px',
    position: 'fixed',
    top: '44px',
    left: '0',
    width: '200px',
    background: 'rgba(0,0,0,0.6)',
    height: 'calc(100vh - 44px)',
    display: 'flex',
    flexDirection: 'column',
  },
});
