import { Typography } from '@mui/material';
import classes, { StyledContainer } from './Footer-styles';

const Footer = () => {
  return (
    <StyledContainer>
      <div className={classes.root}>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} Sajitha Liyanage &mdash; All rights reserved
        </Typography>
      </div>
    </StyledContainer>
  );
};

export default Footer;
