import { createSlice } from '@reduxjs/toolkit';

const trainingSlice = createSlice({
  name: 'training',
  initialState: {
    currentTraining: {
      books: [],
      startTraining: "11.07.2022",
      endTraining: "11.07.2022",
      statistics: [{
        data:  "11.07.2022",
        time: "08:10:09",
        readPages: 12,
      }]
    },
    finishedTrainings: [],
  },
  isLoading: false,
  isLoggedIn: false,
  error: null,
})
 
export default trainingSlice.reducer;