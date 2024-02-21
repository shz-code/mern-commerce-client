import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartSlideOpen: false,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    toggleCartSlideOpen: (state) => {
      state.cartSlideOpen = !state.cartSlideOpen;
    },
  },
});

export default utilitySlice.reducer;
export const { toggleCartSlideOpen } = utilitySlice.actions;
