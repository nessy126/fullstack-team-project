import {
  configureStore
} from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import bookSlice from "./book/bookSlice";

const store = configureStore({
    reducer: {
      auth: authSlice,
      book: bookSlice,
    }
  })

export default store;