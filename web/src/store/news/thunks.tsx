import axios from 'axios';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

import { Filter } from '../../types/filter';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { getAPIErrorMessage } from '../../utils/error';

export const getNewsByQuery: AsyncThunk<any, Filter, AsyncThunkConfig> = createAsyncThunk(
  'news/getNewsByQuery',
  async ({ query, language, page, pageSize }: Filter, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=6fac057293394e2499ac3b250163bc29`
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
