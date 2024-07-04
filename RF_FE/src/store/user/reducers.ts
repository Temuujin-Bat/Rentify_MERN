import { PayloadAction } from "@reduxjs/toolkit";
import { TUserStore } from "../../types";

const reducers = {
  setUserInfo: (
    state: TUserStore,
    action: PayloadAction<TUserStore["userInfo"]>
  ) => ({
    ...state,
    userInfo: action.payload,
  }),
};

export { reducers };
