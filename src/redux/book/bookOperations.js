import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const addBook = createAsyncThunk(
  "addBooks/post",
  async (data, { rejectWithValue }) => {
    try {
      console.log("addBook");
      const result = await axios.post("/api/books", data);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getAllBooks = createAsyncThunk(
  "allBooks/get",
  async (auth, { rejectWithValue }) => {
    try {
      token.set(auth.token);
      const result = await axios.get("/api/books");
      return result.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
