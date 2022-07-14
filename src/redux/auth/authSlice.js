import { createSlice } from "@reduxjs/toolkit";

import { signup, login, logout, current } from "./authOperations";

const initialValue = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signup.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logout.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: (state) => {
      state.user = { ...initialState.user };
      state.token = "";
      state.isLogin = false;
      state.loading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [current.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
