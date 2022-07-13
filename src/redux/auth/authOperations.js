import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "../../utils/userApi";

export const registerUser = createAsyncThunk(
  "auth/register", 
  async (newUser, thunkApi) => {
    try {
      const dataRegister = await registerApi(newUser);
      console.log(dataRegister);
      return dataRegister
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)