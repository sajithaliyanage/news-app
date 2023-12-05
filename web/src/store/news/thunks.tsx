import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Filter } from '../../types/filter';

export const getNewsByQuery = createAsyncThunk(
  'news/getNewsByQuery',
  async ({ query, language, page, pageSize }: Filter) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=78b956de847d4446a9fb8d2013ec5f43`
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
      console.log(error);
    }
  }
);
