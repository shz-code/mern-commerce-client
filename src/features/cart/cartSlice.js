import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selectedRoomFacilities: [],
  sort: "default",
  page: 1,
  limit: 3,
};

const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      state.search = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    initiateSelectedRoomFacilities: (state, action) => {
      state.selectedRoomFacilities = action.payload;
    },
    addSelectedRoomFacilities: (state, action) => {
      state.selectedRoomFacilities = state.selectedRoomFacilities.concat(
        action.payload
      );
    },
    removeSelectedRoomFacilities: (state, action) => {
      state.selectedRoomFacilities = state.selectedRoomFacilities.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const {
  initializeCart,
  updateSort,
  updatePage,
  addSelectedRoomFacilities,
  removeSelectedRoomFacilities,
  initiateSelectedRoomFacilities,
} = cartSlice.actions;
