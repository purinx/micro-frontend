import React from 'react';
import { Center, CenterProps, CircularProgress } from '@chakra-ui/react';

export const Loading = (props: CenterProps) => (
  <Center {...props}>
    <CircularProgress isIndeterminate color="green.300" />
  </Center>
);
