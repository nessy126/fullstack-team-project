import { createSlice } from '@reduxjs/toolkit';
import {addTraining, getProgress} from './trainingOperations';

const initialState = {
  training: {
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
    [addTraining.pending]: (state)=>{
      state.isLoading=true;
      state.error=null;
    },
    [addTraining.fulfilled]: (state, {payload})=>{
      state.training=[...state.training, payload]
      state.isLoading=false;
      state.error=null;
    },
    [addTraining.rejected]: (state, {payload})=>{
      state.training=[...state.training, payload];
      state.isLoading=false;
      state.error=payload;
      console.log("addTraining", payload);
    },
    [getProgress.pending]: (state)=>{
      state.isLoading=true;
      state.error=null;
    },
    [getProgress.fulfilled]: (state, {payload})=>{
      state.training=[...state.training, payload];
      state.isLoading=false;
      state.error=null;
    }
  }
})


export default trainingSlice.reducer;