import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bookAPI from "utils/api/bookApi";

export const addBook = createAsyncThunk(
  "book/add",
  async (data, { rejectWithValue }) => {
    try {
      const result = await bookAPI.addBookAPI(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addReview = createAsyncThunk(
  "book/addReview",
  async (review, { rejectWithValue }) => {
    const { id, ...data } = review;
    try {
      const result = await bookAPI.addReview(id, data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllBooks = createAsyncThunk(
  "allBooks/get",
  async (_, { rejectWithValue }) => {
    try {
      const result = await bookAPI.getAllBooksAPI();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
