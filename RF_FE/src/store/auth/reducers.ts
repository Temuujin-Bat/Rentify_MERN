import { PayloadAction } from "@reduxjs/toolkit";
import { TLoginStore } from "../../types";

const reducers = {
  setToken: (state: TLoginStore, action: PayloadAction<string>) => ({
    ...state,
    token: action.payload,
  }),
  setUserDetails: (state: TLoginStore, action: PayloadAction<string>) => ({
    ...state,
    userDetails: action.payload,
  }),
  logout: (state: TLoginStore) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    return {
      ...state,
      token: null,
      userDetails: null,
    };
  },
};

export { reducers };
