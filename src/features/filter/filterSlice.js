import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  categories: [],
  priceRange: [1, 50000],
  sort: "default",
  page: 1,
  limit: 3,
  query: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    updatePage: (state) => {
      state.page = state.page + 1;
    },
    initiateCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategories: (state, action) => {
      state.categories = state.categories.concat(action.payload);
    },
    removeCategories: (state, action) => {
      state.categories = state.categories.filter(
        (item) => item !== action.payload
      );
    },
    addMinPrice: (state, action) => {
      state.priceRange[0] = action.payload;
    },
    addMaxPrice: (state, action) => {
      state.priceRange[1] = action.payload;
    },
    // limit=1&min=1&max=50000&skip=0&category=["65cf8d46ae3c6928ced6828a"]
    setQuery: (state) => {
      state.query = ``;
    },
    reset: (state) => {
      state.search = "";
      state.categories = [];
      state.priceRange = [1, 50000];
      state.sort = "default";
      state.page = 1;
      state.limit = 3;
    },
  },
});

export default filterSlice.reducer;
export const {
  updateSearch,
  updateSort,
  updatePage,
  addCategories,
  removeCategories,
  initiateCategories,
  addMaxPrice,
  addMinPrice,
  setQuery,
  reset,
} = filterSlice.actions;
