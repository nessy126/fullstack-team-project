import { createAsyncThunk } from "@reduxjs/toolkit";
import * as trainingAPI from "utils/api/trainingApi";

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

export const getProgressTraining = createAsyncThunk(
  "training/progress",
  async (_, { rejectWithValue }) => {
    try {
      const training = await trainingAPI.getProgressAPI();

      const amountOfBooks = training.booksId.length;
      const booksLeft = training.booksId.filter(
        ({ status }) => status === "inReading"
      ).length;

      const result = {
        ...training,
        amountOfBooks,
        booksLeft,
      };

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const finishTraiining = createAsyncThunk(
  "training/finish",
  async (data, { rejectWithValue }) => {
    try {
      const finishedTraining = await trainingAPI.finishTraiiningApi(data);
      const amountOfBooks = finishedTraining.training.booksId.length;

      const result = { ...finishedTraining, amountOfBooks };

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
