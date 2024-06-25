import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { TReduxApartments } from "../../types";

const initialState: TReduxApartments = {
  apartments: [],
  singleApartment: null,
  userApartments: [],
  userSingleApartment: null,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers,
});

export const {
  setApartments,
  setSingleApartment,
  setUserApartments,
  setUserSingleApartment,
} = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
