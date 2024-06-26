import { configureStore } from "@reduxjs/toolkit";

import apartmentsReducer from "./apartments/slice";
import authReducer from "./auth/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    apartmentsReducer,
    authReducer,
    userReducer,
  },
});

export { store };
