import { createSlice } from "@reduxjs/toolkit";

import iAuthSlice from "./models";

const initialState: iAuthSlice = {
  data: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => ({
      ...state,
      isLoading: true,
    }),
    loggedIn: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
  },
});

export const { login, loggedIn } = authSlice.actions;

export default authSlice.reducer;
