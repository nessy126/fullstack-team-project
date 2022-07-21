import { createSlice } from "@reduxjs/toolkit";

import { signUp, login, logout, current } from "./authOperations";

import {
  addTraining,
  finishTraiining,
  getProgressTraining,
} from "redux/training/trainingOperations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  training: {
    trainingID: null,
    booksId: [],
    booksList: [],
    startTraining: 0,
    endTraining: 0,
    factEndTraining: 0,
    amountOfDays: 0,
    amountOfPages: 0,
    pagesPerDay: 0,
    amountOfBooks: 0,
    booksLeft: 0,
    status: "created",
    statistics: [],
  },
  isTraining: false,
  isLoading: false,
  isLoggedIn: false,
  registerPass: false,
  verificationToken: null,
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
      state.user = { ...payload };
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
    },
    [getProgressTraining.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProgressTraining.fulfilled]: (state, { payload }) => {
      state.isTraining = true;
      state.isLoading = false;
      state.error = null;
      state.training = {
        ...state.training,
        trainingID: payload._id,
        booksList: payload.booksId,
        startTraining: payload.startTraining,
        endTraining: payload.endTraining,
        factEndTraining: payload.factEndTraining,
        amountOfDays: payload.amountOfDays,
        amountOfPages: payload.amountOfPages,
        amountOfBooks: payload.amountOfBooks,
        booksLeft: payload.booksLeft,
        pagesPerDay: payload.pagesPerDay,
      };
    },
    [getProgressTraining.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [finishTraiining.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [finishTraiining.fulfilled]: (state, { payload }) => {
      state.isTraining = false;
      state.isLoading = false;
      state.training = {
        ...state.training,
        trainingID: payload.training._id,
        booksId: payload.training.booksId,
        startTraining: payload.training.startTraining,
        endTraining: payload.training.endTraining,
        factEndTraining: payload.training.factEndTraining,
        amountOfDays: payload.training.amountOfDays,
        amountOfPages: payload.training.amountOfPages,
        pagesPerDay: payload.training.pagesPerDay,
        amountOfBooks: payload.training?.amountOfBooks,
        booksLeft: payload.training,
        status: payload.training.status,
        statistics: payload.training.statistics,
      };
      state.error = null;
    },
    [finishTraiining.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
