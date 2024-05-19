import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers.js";

const authDetails = localStorage.getItem("user");

const initialState = {
  tokenDetails: localStorage.getItem("token") || "",
  authDetails: JSON.parse(authDetails) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { setToken, setAuth } = authSlice.actions;
export default authSlice.reducer;
