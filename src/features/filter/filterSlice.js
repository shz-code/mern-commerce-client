import { createSlice } from "@reduxjs/toolkit";

const makeQuery = (state) => {
  let query = "";
  // Sort and Order query
  if (state.sort === "sold") {
    query += "sort=sold";
  } else if (state.sort === "price") {
    query += `sort=price`;
  } else if (state.sort === "review") {
    query += `sort=commentsCount`;
  } else if (state.sort === "default") {
    query += `sort=_id`;
  }

  if (state.ordering === "desc") {
    query += "&order=desc";
  } else if (state.ordering === "asc") {
    query += `&order=asc`;
  }

  // min max query
  if (query.length)
    query += `&min=${state.priceRange[0]}&max=${state.priceRange[1]}`;
  else query += `min=${state.priceRange[0]}&max=${state.priceRange[1]}`;

  query += `&limit=${state.skip}`;

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
  ordering: "default",
  sort: "default",
  skip: 2,
  limit: 2,
  query: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateOrdering: (state, action) => {
      state.ordering = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    updateSkip: (state) => {
      state.skip += state.limit;
      let query = makeQuery(state);
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
    setQuery: (state) => {
      let query = makeQuery(state);
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
  updateOrdering,
  updateSkip,
  addCategories,
  removeCategories,
  initiateCategories,
  addMaxPrice,
  addMinPrice,
  setQuery,
  reset,
} = filterSlice.actions;
