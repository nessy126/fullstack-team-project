import { createSlice } from '@reduxjs/toolkit';
import {addBook, getAllBooks} from "./bookOperations";

const initialState = {
  book: [{
    title: "",
    author: "",
    year: 0,
    status: "",
    pageTotal: 0,
    pageFinished: 0, 
    feedBack: {
      rating: 0,
      comment: ""
    },
  }],
  isLoading: false,
  isLoggedIn: false,
  error: null,
}

const bookSlice  = createSlice({
  name: "book",
  initialState,
  extraReducers:{
    [getAllBooks.pending]: (state)=>{
      state.isLoading=true;
      state.error=null;
      
    },
    [getAllBooks.fulfilled]: (state, {payload})=>{
      state.books=[...state, payload];
      state.isLoading=true;
      state.error=null;
      console.log("getAllBooks", payload);
    },
    [getAllBooks.rejected]: (state, {payload})=>{
      state.books=[...state.books, payload];
      state.isLoading=false;
      state.error=payload;
      console.log("getAllBooks", payload);
    },
  }
}) 

export const bookReducer = bookSlice.reducer;