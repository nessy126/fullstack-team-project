import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "utils/api/usersApi";
import { toast } from "react-toastify";

export const signUp = createAsyncThunk(
  //type for 3 conditions of promises (pending, reject, fulfilled)
  "auth/signup",

  async (user, { rejectWithValue }) => {
    try {
      const res = await authAPI.signUpApi(user);
      return res;
    } catch (error) {
      const { status } = error.response;
      if (status === 409) {
        toast.error("Email in use");
      }
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await authAPI.loginApi(user);
      return res;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        return toast.error("Unverified email");
      }
      toast.error("Wrong email/password");
      rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }

      const res = await authAPI.currentApi(auth);
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      await authAPI.logoutApi(auth);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const resendVerification = createAsyncThunk(
  "auth/resendConfirmation",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { email } = getState().auth.user;

      const data = { email: email };

      const res = await authAPI.resendApi(data);
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
