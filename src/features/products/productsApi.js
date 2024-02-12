import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product",
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: "product",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;
