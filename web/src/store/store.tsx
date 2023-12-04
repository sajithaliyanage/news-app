import { configureStore } from '@reduxjs/toolkit';

import newsReducer from './news/reducerSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
