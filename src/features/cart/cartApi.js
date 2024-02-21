import toast from "react-hot-toast";
import apiSlice from "../api/apiSlice";

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "cart",
      providesTags: () => ["Cart"],
    }),
    updateCart: builder.mutation({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getCart", undefined, () => {
              return res.data.data;
            })
          );
          toast.success(res.data.message);
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    removeCart: builder.mutation({
      query: (body) => ({
        url: "cart",
        method: "PUT",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getCart", undefined, () => {
              return res.data.data;
            })
          );
          toast.success(res.data.message);
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
  }),
});

export const { useGetCartQuery, useUpdateCartMutation, useRemoveCartMutation } =
  cartApi;
