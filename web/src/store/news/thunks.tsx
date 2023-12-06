import axios from 'axios';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

import { Filter } from '../../types/filter';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { getAPIErrorMessage } from '../../utils/error';
import { Article } from '../../types/article';
import { Pagination } from '../../types/newsState';
import { getLastSeventhDay } from '../../utils/common';

type NewsData = {
  totalResults: number;
  pagination: Pagination;
  articles: Article[];
};

export const getNewsByQuery: AsyncThunk<NewsData, Filter, AsyncThunkConfig> = createAsyncThunk(
  'news/getNewsByQuery',
  async ({ query, language, page, pageSize }: Filter, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/news?q=${query}&language=${language}&from=${getLastSeventhDay()}&page=${page}&pageSize=${pageSize}`
      );
      const responseData = response.data;
      if (responseData.totalResults > page * pageSize) {
        responseData.pagination = {
          next: page + 1,
          prev: page > 1 ? page - 1 : null,
        };
      } else {
        responseData.pagination = {
          next: null,
        };
      }
      return responseData;
    } catch (error) {
      return rejectWithValue(getAPIErrorMessage(error));
    }
  }
);
