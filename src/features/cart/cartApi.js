import apiSlice from "../api/apiSlice";

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "category",
    }),
    updateCart: builder.mutation({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetCartQuery, useUpdateCartMutation } = cartApi;
