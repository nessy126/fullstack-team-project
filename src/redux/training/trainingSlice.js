// import { createSlice } from '@reduxjs/toolkit';
// import {addTraining, getProgress} from './trainingOperations';

// const initialState = {
//   training: {
  
//   },
//   finishedTrainings: [],
//   isLoading: false,
//   isLoggedIn: false,
//   error: null,
// }

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  extraReducers:{
//Перенести в слайс Юзера
    [getProgress.pending]: (state)=>{
      state.isLoading=true;
      state.error=null;
    },
    [getProgress.fulfilled]: (state, {payload})=>{
      state.training=[...state.training, payload];
      state.isLoading=false;
      state.error=null;
    },
    [getProgress.rejected]: (state, {payload})=>{
      state.isLoading=false;
      state.error=payload;
      console.log("getProgress", payload);
    }
  }
})


// export default trainingSlice.reducer;