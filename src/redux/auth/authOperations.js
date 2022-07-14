import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../utils/userApi";

// export const registerUser = createAsyncThunk(
//   "register",
//   async (newUser, thunkApi) => {
//     try {
//       const dataRegister = await registerApi(newUser);
//       console.log(dataRegister);
//       return dataRegister;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await authAPI.signup(data);
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
      const result = await authAPI.login(data);
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
      const result = await authAPI.logout();
      return result;
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
      // if(!auth.token){
      //     return rejectWithValue("Not autorization");
      // }
      const result = await authAPI.getCurrent(auth.token);
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
