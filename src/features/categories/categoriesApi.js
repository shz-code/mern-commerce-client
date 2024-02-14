import toast from "react-hot-toast";
import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "category",
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "category",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getCategories",
              undefined,
              (draft) => {
                return [...draft, res.data.data];
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

export const { useGetCategoriesQuery, useAddCategoryMutation } = productsApi;
