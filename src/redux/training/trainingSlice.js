import { createSlice } from "@reduxjs/toolkit";
import { addTraining, getProgress } from "./trainingOperations";

const initialState = {
  training: {},
  finishedTrainings: [],
  startTraining: null,
  endTraining: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  stats: [],
};
// training: {
//   booksId: [],
//   startTraining: 0,
//   endTraining: 0,
//   statistics: [{
//     data:  0,
//     time: 0,
//     readPages: 0,
//   }]
// }

const trainingSlice = createSlice({
  name: "training",
  initialState,
  extraReducers: {
    [addTraining.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addTraining.fulfilled]: (state, { payload }) => {
      state.training = payload;
      state.isLoading = false;
      state.error = null;
    },
    [addTraining.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getProgress.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProgress.fulfilled]: (state, { payload }) => {
      state.training = payload.booksList;
      state.isLoading = false;
      state.startTraining = payload.startTraining;
      state.endTraining = payload.endTraining;
      state.error = null;
    },
    [getProgress.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log("getProgress", payload);
    },
  },
});

export default trainingSlice.reducer;
