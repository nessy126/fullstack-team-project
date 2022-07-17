import { createSlice } from '@reduxjs/toolkit';
import {getAllBooks, addBook} from "./bookOperations";

const initialState = {
  book: [],
  isLoading: false,
  isLoggedIn: false,
  error: null,
}
// book: [{
//   title: "",
//   author: "",
//   year: 0,
//   status: "",
//   pageTotal: 0,
//   pageFinished: 0, 
//   feedBack: {
//     rating: 0,
//     comment: ""
//   },
// }]

const bookSlice  = createSlice({
  name: "book",
  initialState,
  extraReducers:{
    [getAllBooks.pending]: (state)=>{
      state.isLoading=true;
      state.error=null;
    },
    [getAllBooks.fulfilled]: (state, {payload})=>{
      state.book=payload;
      state.isLoading=false;
      state.error=null;

    },
    [getAllBooks.rejected]: (state, {payload})=>{
      console.log(payload);
      state.isLoading=false;
      state.error=payload;
      console.log("getAllBooks.rejected", payload);
    },
    [addBook.pending]: (state)=>{
      state.isLoading=true;
      state.error=null;
    },
    [addBook.fulfilled]: (state, {payload})=>{
      console.log(state.book);
      state.book=[...state.book, payload];
      state.isLoading=false;
      state.error=null;
      console.log("addBook", payload);
    },
    [addBook.rejected]: (state, {payload})=>{
      state.isLoading=false;
      state.error=payload;
      console.log("addBook", payload);
    }
  }
}) 

export default bookSlice.reducer;


