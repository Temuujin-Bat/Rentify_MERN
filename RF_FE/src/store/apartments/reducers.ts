import { PayloadAction } from "@reduxjs/toolkit";
import { TApartmentsStore } from "../../types";

const reducers = {
  setApartments: (
    state: TApartmentsStore,
    action: PayloadAction<TApartmentsStore["apartments"]>
  ) => ({
    ...state,
    apartments: action.payload,
  }),
  setSingleApartment: (
    state: TApartmentsStore,
    action: PayloadAction<TApartmentsStore["singleApartment"]>
  ) => ({
    ...state,
    singleApartment: action.payload,
  }),
  setUserApartments: (
    state: TApartmentsStore,
    action: PayloadAction<TApartmentsStore["userApartments"]>
  ) => ({
    ...state,
    userApartments: action.payload,
  }),
};

export { reducers };
