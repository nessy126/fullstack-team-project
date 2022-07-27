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

export const getCurrentTraining = createAsyncThunk(
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

export const addStatistics = createAsyncThunk(
  "training/Statistics ",
  async ({ newStatistics, IdTraining }, { rejectWithValue }) => {
    try {
      console.log("newStatistics :>> ", newStatistics);
      console.log("IdTraining :>> ", IdTraining);
      const result = await trainingAPI.addStatistics(newStatistics, IdTraining);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const finishTraining = createAsyncThunk(
  "training/finish",
  async (data, { rejectWithValue }) => {
    try {
      const finishedTraining = await trainingAPI.finishTrainingApi(data);
      const amountOfBooks = finishedTraining.training.booksId.length;

      const result = { ...finishedTraining, amountOfBooks };

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
