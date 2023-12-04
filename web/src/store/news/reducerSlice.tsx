import { createSlice } from '@reduxjs/toolkit';

import { Filter } from '../../types/filter';
import { getNewsByQuery } from './thunks';

const initialState: {
  filter: Filter;
  articles: any[];
  noResults: boolean;
  pagination: any;
  totalResults: number;
  error: any;
  isBusy: boolean;
  isMoreLoading: boolean;
} = {
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
        state.articles = action.payload.articles;
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
