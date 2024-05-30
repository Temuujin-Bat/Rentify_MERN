import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const {} = userSlice.actions;
export default userSlice.reducer;
