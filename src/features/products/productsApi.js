import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
