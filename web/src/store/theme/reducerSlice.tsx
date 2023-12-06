import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../../types/themeState';
import { THEME_MODES } from '../../utils/common';

const initialState: ThemeState = {
  palette: {
    mode: THEME_MODES.LIGHT_MODE,
  },
  isRTL: false,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state) => {
      state.palette.mode =
        state.palette.mode === THEME_MODES.LIGHT_MODE
          ? THEME_MODES.DARK_MODE
          : THEME_MODES.LIGHT_MODE;
    },
    updateDirection: (state) => {
      state.isRTL = !state.isRTL;
    },
  },
});

export const { updateTheme, updateDirection } = themeReducer.actions;

export default themeReducer.reducer;
