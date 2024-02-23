import apiSlice from "../api/apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: (id) => `order/${id}`,
    }),
    order: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useOrderMutation, useGetOrderQuery } = orderApi;
