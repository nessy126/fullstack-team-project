import { createSlice } from "@reduxjs/toolkit";

import { signUp, login, logout, current } from "./authActionThunk";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  isLoading: false,
  isLoggedIn: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // builder
    //   .addCase(signUp.pending, (state) => {
    //     return { ...state, isLoading: true };
    //   })
    //   .addCase(signUp.rejected, (state) => {
    //     return { ...state, isLoading: false };
    //   })
    //   .addCase(signUp.fulfilled, (state, action) => {
    //     console.log({ ...state });
    //     console.log(action);
    //     // return {
    //     //   ...state,
    //     //   user: { ...payload?.user },
    //     //   token: payload?.token,
    //     //   isLoading: false,
    //     //   isLoggedIn: true,
    //     // };
    //   });
    [signUp.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      // console.log("state");
      console.log("payload:", payload.data);
      state.user = { ...payload.data?.user };
      state.token = payload.data?.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [signUp.rejected]: (state, { payload }) => {
      console.log("reject");
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
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
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
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
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
