import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./slices/loggedUserSlice";

export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
  },
});

// Optional: Define types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
