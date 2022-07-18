import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const addBook = createAsyncThunk(
    "book/add",
    async (data, {rejectWithValue})=>{
        try {
            const result = await axios.post("books", data);
            return result.data;
        } catch (error) {
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
            return rejectWithValue(error);
        }
    }
)

