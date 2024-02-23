import toast from "react-hot-toast";
import apiSlice from "../api/apiSlice";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id) => `profile/${id}`,
    }),
    updateProfile: builder.mutation({
      query: ({ id, body }) => ({
        url: `profile/${id}`,
        method: "PATCH",
        body: body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getProfile",
              args.id.toString(),
              () => {
                return res.data;
              }
            )
          );
          toast.success("Profile Updated Successfully");
        } catch (err) {
          toast.error(err.data.message);
        }
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
