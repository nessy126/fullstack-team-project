import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import authSlice from "./auth/authSlice";
import {bookReducer} from "./book/bookSlice";
import {trainingReduser} from "./training/trainingSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
];

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    book: bookReducer,
    training: trainingReduser,
  },
  middleware: middleware,
});

export const persister = persistStore(store);
