import React from 'react';
import { Container } from '@mui/material';
import classes, { StyledContainer } from './Layout-styles';

import Footer from '../Footer';
import Header from '../Header';

const Layout = (props: { children: React.ReactElement }) => {
  return (
    <StyledContainer>
      <Container className={classes.root} maxWidth='lg'>
        <Header />
        <div className={classes.container}>{props.children}</div>
        <Footer />
      </Container>
    </StyledContainer>
  );
};

export default Layout;
