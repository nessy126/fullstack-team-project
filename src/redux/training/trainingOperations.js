import { createAsyncThunk } from '@reduxjs/toolkit';
import * as trainingAPI from "../../utils/trainingApi";


export const addTraining = createAsyncThunk(
    "training/start",
    async (data, {rejectWithValue})=>{
        try {
            const result = await trainingAPI.addTrainingAPI(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getProgress = createAsyncThunk(
    "training/progress",
    async (_, {rejectWithValue})=>{
        try {
            const result = await trainingAPI.getProgressAPI();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

