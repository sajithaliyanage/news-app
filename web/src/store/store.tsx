import { configureStore } from '@reduxjs/toolkit';

import newsReducer from './news/reducerSlice';
import themeReducer from './theme/reducerSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
