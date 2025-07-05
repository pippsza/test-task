import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/slice";
import casesReducer from "./cases/slice";

export const store = configureStore({
  reducer: {
    cases: casesReducer,
    filters: filtersReducer,
  },
});

store.subscribe(() => {
  console.log("[GLOBAL STATE]", store.getState());
});
