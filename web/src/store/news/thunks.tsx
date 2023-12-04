import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNewsByQuery = createAsyncThunk('news/getNewsByQuery', async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=apple&language=en&page=1&pageSize=3&apiKey=9cccd81d96c349d0988f72b195885f7c`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
