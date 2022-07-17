import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as authAPI from "../../utils/userApi";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk(
  //type for 3 conditions of promises (pending, reject, fulfilled)
  "auth/signup",

  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/signup", user);
      token.set(data.token);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 409) {
        alert("Email in use");
      }
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/login", user);
      token.set(data.token);
      return data;
    } catch (error) {
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

      token.set(auth.token);
      const { data } = await axios.get("users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
