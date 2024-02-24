import toast from "react-hot-toast";
import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => `product?${query}`,
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
    addComment: builder.mutation({
      query: ({ id, body }) => ({
        url: `product/comment/${id}`,
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          console.log(res);
          dispatch(
            apiSlice.util.updateQueryData(
              "getProduct",
              arg.id.toString(),
              () => {
                return res.data.data;
              }
            )
          );
          toast.success(res.data.message);
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useAddCommentMutation,
} = productsApi;
