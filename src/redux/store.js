import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import bookSlice from "./book";

const store = configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
  },
});

export default store;
