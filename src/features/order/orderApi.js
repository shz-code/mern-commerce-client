import apiSlice from "../api/apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    order: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useOrderMutation } = orderApi;
