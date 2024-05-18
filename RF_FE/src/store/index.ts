import { configureStore } from "@reduxjs/toolkit";

import apartmentsReducer from "./apartments/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    apartmentsReducer,
    authReducer,
  },
});

export { store };
