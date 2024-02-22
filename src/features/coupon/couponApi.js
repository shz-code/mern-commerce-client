import apiSlice from "../api/apiSlice";

const couponApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    check: builder.mutation({
      query: (body) => ({
        url: `coupon/check`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCheckMutation } = couponApi;
