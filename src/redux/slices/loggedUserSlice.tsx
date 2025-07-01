import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface LoggedUserState {
  user: IUser | null;
}

// Load from localStorage if available
const loadFromStorage = (): IUser | null => {
  const saved = localStorage.getItem("loggedUser");
  return saved ? JSON.parse(saved) : null;
};

const initialState: LoggedUserState = {
  user: loadFromStorage(),
};

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("loggedUser", JSON.stringify(state.user));
      }
    },
    setUserFromSelf: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      localStorage.setItem("loggedUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("loggedUser");
    },
  },
});

export const { updateUser, setUserFromSelf, logout } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
