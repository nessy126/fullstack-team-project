import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoading: false,
  isLoggedIn: false,
  error: null,
});

export default authSlice;
