import toast from "react-hot-toast";
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
    addCoupon: builder.mutation({
      query: (body) => ({
        url: `coupon`,
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getCoupons", undefined, (draft) => {
              return [...draft, res.data];
            })
          );
          toast.success("Coupon Created Successfully");
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    getCoupons: builder.query({
      query: () => `coupon`,
    }),
  }),
});

export const { useCheckMutation, useGetCouponsQuery, useAddCouponMutation } =
  couponApi;
