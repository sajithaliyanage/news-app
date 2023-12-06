import { createSlice } from '@reduxjs/toolkit';

import { getNewsByQuery } from './thunks';
import { NewsState } from '../../types/newsState';

const initialState: NewsState = {
  filter: {
    query: 'apple',
    language: 'en',
    page: 1,
    pageSize: 6,
    sortBy: 'publishedAt',
  },
  articles: [],
  noResults: false,
  pagination: {
    next: null,
    prev: null,
  },
  totalResults: 0,
  error: null,
  isBusy: false,
  isMoreLoading: false,
  showError: false,
};

const newsReducer = createSlice({
  name: 'news',
  initialState,
  reducers: {
    updateNewsTopic: (state, action) => {
      state.filter.query = action.payload.query;
      state.filter.page = 1;
      state.articles = [];
    },
    updateNewsLanguage: (state, action) => {
      state.filter.language = action.payload.language;
      state.filter.page = 1;
      state.articles = [];
    },
    updatePagination: (state, action) => {
      state.isMoreLoading = action.payload.isMoreLoading;
      state.filter.page += 1;
    },
    hideErrorAlert: (state) => {
      state.showError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsByQuery.pending, (state) => {
        state.isBusy = true;
      })
      .addCase(getNewsByQuery.fulfilled, (state, action) => {
        state.articles =
          state.filter.page !== 1
            ? state.articles.concat(action.payload.articles)
            : action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.pagination = action.payload.pagination;
        state.isBusy = false;
        state.isMoreLoading = false;
      })
      .addCase(getNewsByQuery.rejected, (state, action) => {
        state.error = action.payload;
        state.isBusy = false;
        state.isMoreLoading = false;
        state.showError = true;
      });
  },
});

export const { updateNewsTopic, updateNewsLanguage, updatePagination, hideErrorAlert } =
  newsReducer.actions;

export default newsReducer.reducer;
