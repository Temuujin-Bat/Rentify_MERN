import { configureStore } from "@reduxjs/toolkit";

import apartmentsReducer from "./apartments/slice";

const store = configureStore({
  reducer: {
    apartmentsReducer,
  },
});

export { store };
