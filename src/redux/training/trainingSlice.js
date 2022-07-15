import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTraining: {
    booksId: [],
    startTraining: 0,
    endTraining: 0,
    statistics: [{
      data:  0,
      time: 0,
      readPages: 0,
    }]
  },
  finishedTrainings: [],
  isLoading: false,
  isLoggedIn: false,
  error: null,
}

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  extraReducers:{
  
  }


})
 
export default trainingSlice;