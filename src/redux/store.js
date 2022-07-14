import {
  configureStore
} from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import bookSlice from "./book/bookSlice";
import trainingSlice from "./training/trainingSlice";

const store = configureStore({
    reducer: {
      auth: authSlice,
      // book: bookSlice,
      training: trainingSlice,
    }
  })

export default store;