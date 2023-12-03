import { Newspaper as NewspaperIcon } from '@mui/icons-material';
import { AppBar, Typography } from '@mui/material';
import classes, { StyledContainer } from './Header-styles';

const Header = () => {
  return (
    <StyledContainer>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position='relative' color='transparent' elevation={0}>
          <div className={classes.iconTitle}>
            <NewspaperIcon className={classes.icon} />
            <Typography variant='h6' noWrap component='div' align='center'>
              NEWS APP
            </Typography>
          </div>
        </AppBar>
      </div>
    </StyledContainer>
  );
};

export default Header;
