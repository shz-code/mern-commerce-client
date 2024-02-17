import { createSlice } from "@reduxjs/toolkit";

const makeQuery = (state, action) => {
  let query = "";
  // Sort and Order query
  if (state.sort === "top_sell") {
    query += "&sort=sale&order=desc";
  } else if (state.sort != "default") {
    query += `&sort=price&order=${state.sort}`;
  }
  // min max query
  if (query.length)
    query += `&min=${state.priceRange[0]}&max=${state.priceRange[1]}`;
  else query += `min=${state.priceRange[0]}&max=${state.priceRange[1]}`;

  if (action.type === "filter/updateSkip") {
    query += `&limit=${state.skip + state.limit}`;
  }

  if (state.categories.length > 0) {
    query += `&category=[${state.categories.map((ct) => `"${ct}"`)}]`;
  }
  if (state.search) {
    query += `&search=${state.search}`;
  }
  return query;
};

const initialState = {
  search: "",
  categories: [],
  priceRange: [1, 50000],
  sort: "default",
  skip: 1,
  limit: 1,
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
    updateSkip: (state, action) => {
      let query = makeQuery(state, action);
      state.skip = state.skip + state.limit;
      state.query = query;
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
    setQuery: (state, action) => {
      let query = makeQuery(state, action);
      state.query = query;
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
  updateSkip,
  addCategories,
  removeCategories,
  initiateCategories,
  addMaxPrice,
  addMinPrice,
  setQuery,
  reset,
} = filterSlice.actions;
