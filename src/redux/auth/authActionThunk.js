import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "../../utils/userApi";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      // console.log(data);
      const result = await authAPI.registerApi(data);
      // console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      // console.log(data);
      const result = await authAPI.loginApi(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logOut();
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
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

      const result = await authAPI.current();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
