import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: undefined,
  _id: undefined,
  exp: undefined,
  role: undefined,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.username = action.payload.username;
      state._id = action.payload._id;
      state.exp = new Date().getTime() + action.payload.exp * 1000;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    userLoggedOut: (state) => {
      state.username = undefined;
      state._id = undefined;
      state.exp = undefined;
      state.role = undefined;
      state.token = undefined;
      // Remove local storage
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
