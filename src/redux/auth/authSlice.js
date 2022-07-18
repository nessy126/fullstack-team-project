import { createSlice } from "@reduxjs/toolkit";

import { signUp, login, logout, current } from "./authActionThunk";
import { addTraining } from './../training/trainingOperations';


const initialState = {
  user: {
    name: null,
    email: null,
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
      state.error = null;
    },
    [addTraining.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;