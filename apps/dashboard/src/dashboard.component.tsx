import { Box, Center, Grid } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { CardHeading } from './components/card-heading.component';
import { Card } from './components/card.component';
import { Title } from './components/title.component';

export const Dashboard: FunctionComponent = () => {
  return (
    <Box
      width={{ base: '100%', md: 'calc(100% - 200px)' }}
      height={{ base: '2050px', md: 'calc(100vh - 44px)' }}
      ml={{ base: '0', md: '200px' }}
      background="#444"
      padding="20px"
    >
      <Title mb="20px">Dashboard</Title>
      <Grid
        gap="20px"
        gridTemplateColumns={{ base: '1fr', md: '200px 1fr' }}
        gridTemplateRows={{ base: '90vw 500px 500px 500px', md: '200px 1fr' }}
        height={{ base: '2000px', md: 'calc(100% - 70px)' }}
      >
        <Card justifyContent="center" alignItems="center">
          <CardHeading>Image</CardHeading>
        </Card>
        <Card justifyContent="center" alignItems="center">
          <CardHeading>Bio</CardHeading>
        </Card>
        <Card justifyContent="center" alignItems="center">
          <CardHeading>Topics</CardHeading>
        </Card>
        <Card justifyContent="center" alignItems="center">
          <CardHeading>Articles</CardHeading>
        </Card>
      </Grid>
    </Box>
  );
};
