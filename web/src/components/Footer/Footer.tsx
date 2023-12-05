import { Typography } from '@mui/material';
import { StyledDiv } from './Footer-styles';

const Footer = () => {
  return (
    <StyledDiv>
      <Typography variant="caption">
        &copy; {new Date().getFullYear()} Sajitha Liyanage &mdash; All rights reserved
      </Typography>
    </StyledDiv>
  );
};

export default Footer;
