import { PayloadAction } from "@reduxjs/toolkit";
import { TReduxApartments } from "../../types";

const reducers = {
  setApartments: (
    state: TReduxApartments,
    action: PayloadAction<TReduxApartments["apartments"]>
  ) => ({
    ...state,
    apartments: action.payload,
  }),
  setSingleApartment: (
    state: TReduxApartments,
    action: PayloadAction<TReduxApartments["singleApartment"]>
  ) => ({
    ...state,
    singleApartment: action.payload,
  }),
  setUserApartments: (
    state: TReduxApartments,
    action: PayloadAction<TReduxApartments["userApartments"]>
  ) => ({
    ...state,
    userApartments: action.payload,
  }),
  setUserSingleApartment: (
    state: TReduxApartments,
    action: PayloadAction<TReduxApartments["userSingleApartment"]>
  ) => ({
    ...state,
    userSingleApartment: action.payload,
  }),
};

export { reducers };
