import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers.js";

interface AuthState {
  tokenDetails: string;
  authDetails: any | null;
}

const authDetails = localStorage.getItem("user");

const initialState: AuthState = {
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
