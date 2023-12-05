import { createSlice } from '@reduxjs/toolkit';

import { getNewsByQuery } from './thunks';
import { NewsState } from '../../types/newsState';

const initialState: NewsState = {
  filter: {
    query: 'apple',
    language: 'en',
    sortBy: 'publishedAt',
  },
  articles: [],
  noResults: false,
  pagination: {},
  totalResults: 0,
  error: null,
  isBusy: false,
  isMoreLoading: false,
  isPaged: false,
};

const newsReducer = createSlice({
  name: 'news',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = {
        query: action.payload.query,
        language: action.payload.language,
        sortBy: action.payload.sortBy,
      };
      state.isMoreLoading = action.payload.isMoreLoading;
    },
    updatePagination: (state, action) => {
      state.isMoreLoading = action.payload.isMoreLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsByQuery.pending, (state) => {
        state.isBusy = true;
      })
      .addCase(getNewsByQuery.fulfilled, (state, action) => {
        state.articles = state.isPaged
          ? state.articles.concat(action.payload.articles)
          : action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.isBusy = false;
        state.isMoreLoading = false;
      })
      .addCase(getNewsByQuery.rejected, (state, action) => {
        state.error = action.payload;
        state.isBusy = false;
        state.isMoreLoading = false;
      });
  },
});

export const { updateFilter, updatePagination } = newsReducer.actions;

export default newsReducer.reducer;
