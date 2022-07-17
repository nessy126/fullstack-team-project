import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const addBook = createAsyncThunk(
    "addBooks/post",
    async (data, {rejectWithValue})=>{
        try {
            console.log("addBook");
            const result = await axios.post("books");
            console.log(result.data);
            return result.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)

export const getAllBooks = createAsyncThunk(
    "allBooks/get",
    async (_, {rejectWithValue})=>{
        try {
            const result = await axios.get("books");
            return result.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)

