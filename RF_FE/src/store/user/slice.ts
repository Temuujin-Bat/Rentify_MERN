import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { TUserStore } from "../../types";

const initialState: TUserStore = {
  userInfo: {
    email: "",
    firstName: "",
    lastName: "",
    _id: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
