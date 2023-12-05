import React from 'react';

import classes, { StyledContainer } from './Layout-styles';
import Footer from '../Footer';
import Header from '../Header';

const Layout = (props: { children: React.ReactElement }) => {
  return (
    <StyledContainer maxWidth="md">
      <Header />
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
