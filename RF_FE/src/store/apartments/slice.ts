import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

const initialState = {
  apartments: [],
  singleApartment: null,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers,
});

export const { setApartments, setSingleApartment } = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
