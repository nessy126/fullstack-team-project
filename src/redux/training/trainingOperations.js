import { createAsyncThunk } from '@reduxjs/toolkit';
import * as trainingAPI from "utils/api/trainingApi";

export const addTraining = createAsyncThunk(
    "training/start",
    async (data, {getState, rejectWithValue})=>{
        try {
            const { auth } = getState();
            if (!auth.token) {
            return rejectWithValue("Not authorized");
            }
            const result = await trainingAPI.addTrainingAPI(data, auth);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
  }
);

export const getProgress = createAsyncThunk(
    "training/progress",
    async (_, {getState, rejectWithValue})=>{
        try {
            const { auth } = getState();
            if (!auth.token) {
            return rejectWithValue("Not authorized");
            }
            const result = await trainingAPI.getProgressAPI(auth);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

      const res = await trainingAPI.getProgressAPI(auth);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
