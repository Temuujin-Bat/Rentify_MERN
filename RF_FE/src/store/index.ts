import { configureStore } from "@reduxjs/toolkit";

import apartmentsReducer from "./apartments/slice";
import authReducer from "./auth/slice";
import userInfoReducer from "./user/slice";

const store = configureStore({
  reducer: {
    apartmentsReducer,
    authReducer,
    userInfoReducer,
  },
});

export { store };
