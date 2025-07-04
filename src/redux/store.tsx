// store.ts
import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./slices/loggedUserSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    // Add other slices here if needed
  },
});

// ✅ Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
