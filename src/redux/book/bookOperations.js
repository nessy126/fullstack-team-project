import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const addBook = createAsyncThunk(
    "books",
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
    "books",
    async (_, {rejectWithValue})=>{
        try {
            console.log("getAllBooks");
            const result = await axios.get("books");
            console.log(result.data);
            return result.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)

