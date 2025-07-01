import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface LoggedUserState {
  user: IUser | null;
}

const initialState: LoggedUserState = {
  user: null,
};

const loggedUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
