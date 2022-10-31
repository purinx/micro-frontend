import { chakra } from '@chakra-ui/react';

export const Card = chakra('div', {
  baseStyle: {
    display: 'flex',
    borderRadius: 'md',
    boxShadow: 'md',
    bgColor: 'dashboard.normal',
  },
});
