import { createAsyncThunk } from '@reduxjs/toolkit';
import * as trainingAPI from "../../utils/trainingApi";


export const addTraining = createAsyncThunk(
    "api/training/start",
    async (data, {rejectWithValue})=>{
        try {
            const result = await trainingAPI.addTraining(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getProgress = createAsyncThunk(
    "api/training",
    async (_, {rejectWithValue})=>{
        try {
            const result = await trainingAPI.getProgress();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

