import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

const initialState = {
  apartments: [],
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers,
});

export const { setApartments } = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
