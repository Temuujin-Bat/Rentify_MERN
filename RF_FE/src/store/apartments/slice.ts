import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { TApartmentsStore } from "../../types";

const initialState: TApartmentsStore = {
  apartments: [],
  singleApartment: null,
  userApartments: [],
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers,
});

export const { setApartments, setSingleApartment, setUserApartments } =
  apartmentsSlice.actions;
export default apartmentsSlice.reducer;
