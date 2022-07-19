import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bookAPI from "utils/api/bookApi";

export const addBook = createAsyncThunk(
  "book/add",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }
      const result = await bookAPI.addBookAPI(data, auth);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAllBooks = createAsyncThunk(
  "allBooks/get",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }
      const result = await bookAPI.getAllBooksAPI(auth);
      return result;
    } catch (error) {

      return rejectWithValue(error);
    }
  }
);
