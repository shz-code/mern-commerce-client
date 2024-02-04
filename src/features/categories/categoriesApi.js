import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "category",
    }),
  }),
});

export const { useGetCategoriesQuery } = productsApi;
