import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
