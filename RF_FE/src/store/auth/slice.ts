import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers.js";

import { TLoginStore } from "../../types/login.type.js";

const authDetails = sessionStorage.getItem("user");
const parsedAuthDetails = authDetails ? JSON.parse(authDetails) : null;

const initialState: TLoginStore = {
  token: sessionStorage.getItem("token"),
  userDetails: parsedAuthDetails,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { setToken, setUserDetails, logout } = authSlice.actions;
export default authSlice.reducer;
