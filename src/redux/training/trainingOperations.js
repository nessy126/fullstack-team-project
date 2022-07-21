import { createAsyncThunk } from "@reduxjs/toolkit";
import * as trainingAPI from "utils/api/trainingApi";

export const addTraining = createAsyncThunk(
  "training/start",
  async (data, { getState, rejectWithValue }) => {
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
);

export const getProgressTraining = createAsyncThunk(
  "training/progress",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }

      const training = await trainingAPI.getProgressAPI(auth);

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
  async (data, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        return rejectWithValue("Not authorized");
      }
      const finishedTraining = await trainingAPI.finishTraiiningApi(data, auth);
      const amountOfBooks = finishedTraining.training.booksId.length;

      const result = { ...finishedTraining, amountOfBooks };

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
