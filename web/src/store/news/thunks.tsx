import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface GetNewsByQueryArgs {
  query: string;
  language: string;
  page: number;
  pageSize: number;
}

export const getNewsByQuery = createAsyncThunk(
  'news/getNewsByQuery',
  async ({ query, language, page, pageSize }: GetNewsByQueryArgs) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=9cccd81d96c349d0988f72b195885f7c`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
