import { createSlice } from '@reduxjs/toolkit';

const trainingSlice = createSlice({
  name: 'training',
  initialState: {
      booksId: [],
      startTraining: "",
      endTraining: "",
      factEndTraining: "", 
      factReadPages: 0,
      amountOfDays: 0,
      amountOfPages: 0,
      pagesPerDay: 0,
      statistics: [{
        data:  "11.07.2022",
        time: "08:10:09",
        readPages: 0,
    }],
  },
  isLoading: false,
  isLoggedIn: false,
  error: null,
})
 
export default trainingSlice;