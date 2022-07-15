import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import bookSlice from "./book";
import trainingSlice from "./training";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // book: bookSlice,
    training: trainingSlice,
  },
});

export default store;
