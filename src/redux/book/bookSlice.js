import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks, addBook } from "./bookOperations";
import { addTraining, finishTraiining } from "redux/training/trainingOperations";

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
    [addTraining.fulfilled]: (state, { payload }) => {
      payload.booksId.map((id) => {
        const changedBook = state.books.find((book) => book._id === id);
        return (changedBook.status = "inReading");
      });
    },
    [finishTraiining.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [finishTraiining.fulfilled]: (state, {payload}) => {
      state.error = null;
      state.isLoading = false
      state.books = [...state.books, payload.booksGoingToReadAgain]//Сюда надо перезаписать книги которые вернулись не прочитанные из завершенной тренировки
    },
    [finishTraiining.rejected]: (state, {payload}) => {
      state.error = payload;
      state.isLoading = false
    }
  },
});
export default bookSlice.reducer;
