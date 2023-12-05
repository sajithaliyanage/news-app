import { Newspaper as NewspaperIcon } from '@mui/icons-material';
import { AppBar, Typography } from '@mui/material';

import classes, { StyledDiv } from './Header-styles';
import LangSelector from '../LangSelector';

const Header = () => {
  return (
    <StyledDiv>
      <AppBar className={classes.appBar} position="relative" color="transparent" elevation={0}>
        <div className={classes.iconTitle}>
          <NewspaperIcon className={classes.icon} />
          <Typography variant="h6" noWrap component="div">
            NEWS APP
          </Typography>
        </div>
        <div>
          <LangSelector />
        </div>
      </AppBar>
    </StyledDiv>
  );
};

export default Header;
