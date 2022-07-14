import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import book from "./book";
// import authSlice from "./auth/authSlice";
// import bookSlice from "./book/bookSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    book: book,
  },
});

export default store;
