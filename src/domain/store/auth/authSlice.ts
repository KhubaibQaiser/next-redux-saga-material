import { createSlice } from "@reduxjs/toolkit";

import iAuthSlice from "./models";

export const sliceName = "auth";

const initialState: iAuthSlice = {
  data: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    loggingIn: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    loggedIn: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    loginError: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export const { loggingIn, loggedIn, loginError } = authSlice.actions;

export default authSlice.reducer;
