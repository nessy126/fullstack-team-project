import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

  name: 'auth',
  initialState: {
    token: null,
    user: {
      name: '',
      email: '',
    }
  },
  isLoading: false,
  isLoggedIn: false,
  error: null,
});

export default authSlice;
