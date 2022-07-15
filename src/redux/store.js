import {
  configureStore,
  // createSerializableStateInvariantMiddleware,
  // isPlain,
} from "@reduxjs/toolkit";
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
//------
// import { Iterable } from "immutable";
//------

import authSlice from "./auth/authSlice";
import bookSlice from "./book/bookSlice";
import trainingSlice from "./training/trainingSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

//-----------isSerializable
// const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

// const getEntries = (value) =>
//   Iterable.isIterable(value) ? value.entries() : Object.entries(value);

// const serializableMiddleware = createSerializableStateInvariantMiddleware({
//   isSerializable,
//   getEntries,
// });
//----------

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    // book: bookSlice,
    training: trainingSlice,
  },
  // middleware: [serializableMiddleware],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);
