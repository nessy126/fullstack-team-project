import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks, addBook, addReview } from "./bookOperations";
import { addTraining } from "redux/training/trainingOperations";

const initialState = {
  books: [],
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllBooks.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getAllBooks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addBook.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addBook.fulfilled]: (state, { payload }) => {
      state.books = [...state.books, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addBook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addTraining.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addTraining.fulfilled]: (state, { payload }) => {
      payload.booksId.map((id) => {
        const changedBook = state.books.find((book) => book._id === id._id);
        return (changedBook.status = "inReading");
      });
    },
    [addTraining.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addReview.fulfilled]: (state, { payload }) => {
      const id = payload.bookReview._id;
      const updateBook = state.books.find((book) => book._id === id);
      updateBook.feedback = payload.bookReview.feedback;
      state.isLoading = false;
      state.error = null;
    },
    [addReview.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addReview.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export default bookSlice.reducer;
