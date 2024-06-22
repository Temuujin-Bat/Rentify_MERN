import { PayloadAction } from "@reduxjs/toolkit";
import { TLoginStore } from "../../types";

const reducers = {
  setToken: (state: TLoginStore, action: PayloadAction<string>) => ({
    ...state,
    tokenDetails: action.payload,
  }),
  setAuth: (state: TLoginStore, action: PayloadAction<string>) => ({
    ...state,
    authDetails: action.payload,
  }),
};

export { reducers };
