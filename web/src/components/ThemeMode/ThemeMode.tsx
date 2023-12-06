import { useDispatch, useSelector } from 'react-redux';
import { IconButton, InputLabel, PaletteOptions } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { RootState } from '../../store/store';
import { updateTheme } from '../../store/theme/reducerSlice';
import classes, { StyledDiv } from './ThemeMode-styles';

const ThemeMode = () => {
  const dispatch = useDispatch<any>();
  const themeMode: PaletteOptions = useSelector((state: RootState) => state.theme.palette);

  const changeThemeHandler = () => {
    dispatch(updateTheme());
  };

  return (
    <StyledDiv>
      <InputLabel className={classes.label}>Theme</InputLabel>
      <IconButton onClick={() => changeThemeHandler()} color="inherit">
        {themeMode.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </StyledDiv>
  );
};

export default ThemeMode;
