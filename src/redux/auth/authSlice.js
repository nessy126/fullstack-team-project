import { createSlice } from "@reduxjs/toolkit";

import { signUp, login, logout, current } from "./authOperations";

import { addTraining } from "redux/training/trainingOperations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  training: {
    booksId: [],
    booksList: [],
    amountOfBooks: 0,
    booksLeft: 0,
    startTraining: 0,
    endTraining: 0,
    amountOfPages: 0,
    pagesPerDay: 0,
    statistics: [],
  },
  isTraining: false,
  isLoading: false,
  isLoggedIn: false,
  registerPass: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = { ...payload?.user };
      state.isLoading = false;
      state.registerPass = true;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = { ...payload?.user };
      state.token = payload?.token;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isTraining = payload.user.isTrainingActive;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled]: (state) => {
      state.user = { ...initialState.user };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [current.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isTraining = payload.isTrainingActive;
    },
    [current.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addTraining.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addTraining.fulfilled]: (state) => {
      state.isTraining = true;
      state.isLoading = false;
    },
    [addTraining.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    }
  },
});

export default authSlice.reducer;
