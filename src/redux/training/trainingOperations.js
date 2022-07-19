import { createAsyncThunk } from "@reduxjs/toolkit";
import * as trainingAPI from "../../utils/api/trainingApi";

export const addTraining = createAsyncThunk(
  "training/start",
  async (data, { rejectWithValue }) => {
    try {
      const result = await trainingAPI.addTrainingAPI(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProgress = createAsyncThunk(
  "training/",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }

      const res = await trainingAPI.getProgressAPI(auth);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
