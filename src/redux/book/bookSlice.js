import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks, addBook } from "./bookOperations";
import { addTraining } from "./../training/trainingOperations";

const initialState = {
  books: [],
  isLoading: false,
  isLoggedIn: false,
  error: null,
};
// book: [{
//   title: "",
//   author: "",
//   year: 0,
//   status: "",
//   pageTotal: 0,
//   pageFinished: 0,
//   feedBack: {
//     rating: 0,
//     comment: ""
//   },
// }]

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
  },
});

export default bookSlice.reducer;
