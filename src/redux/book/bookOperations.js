import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookApi from "../../utils/bookApi";


export const addBook = createAsyncThunk(
    "/api/books",
    async (data, {rejectWithValue})=>{
        try {
            const result = await bookApi.addBook(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getAllBooks = createAsyncThunk(
    "/api/books",
    async (_, {rejectWithValue})=>{
        try {
            console.log("getAllBooks");
            const result = await bookApi.getAllBooks();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

