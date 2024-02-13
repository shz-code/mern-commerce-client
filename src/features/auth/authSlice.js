import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: undefined,
  username: undefined,
  _id: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state._id = action.payload._id;
    },
    userLoggedOut: (state) => {
      state.name = undefined;
      state.username = undefined;
      state._id = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
