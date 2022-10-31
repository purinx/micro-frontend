import { extendTheme } from '@chakra-ui/react';

export const dashboardTheme = extendTheme({
  global: {},
  colors: {
    dashboard: {
      black: 'rgba(0,0,0,0.6)',
      primary: '#2aaf2f',
      secondary: '#a4caf1',
      normal: '#ccc',
      back: '',
    },
  },
  breakpoints: {
    sm: '370px',
    md: '530px',
    lg: '830px',
    xl: '1120px',
  },
});
