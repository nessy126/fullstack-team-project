import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as authAPI from "../../utils/userApi";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/users/";

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
    // console.log(user);
    try {
      const { data } = await axios.post("signup", user);
      token.set(data.token);
      // const result = await authAPI.registerApi(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    // console.log(user);
    try {
      const { data } = await axios.post("login", user);
      token.set(data.token);
      // const result = await authAPI.loginApi(data);
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
      // console.log(auth.token);

      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }

      token.set(auth.token);
      const { data } = await axios.get("current");
      // const result = await authAPI.current(auth);
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
      await axios.post("logout");
      token.unset();
      // await authAPI.logOut(auth);
      // return result;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error);
    }
  }
);
