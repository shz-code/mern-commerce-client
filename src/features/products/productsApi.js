import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product",
    }),
    getProduct: builder.query({
      query: (id) => `product/${id}`,
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

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
} = productsApi;
