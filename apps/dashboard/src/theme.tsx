import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

export const dashboardTheme = extendTheme({
  global: {},
  colors: {
    black: 'rgba(0,0,0,0.6)',
    primary: '#a4f44b',
    secondary: '#a4caf1',
    normal: '#ccc',
  },
  breakpoints: {
    sm: '370px',
    md: '530px',
    lg: '830px',
    xl: '1120px',
  },
});
