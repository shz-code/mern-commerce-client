import apiSlice from "../api/apiSlice";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id) => `profile/${id}`,
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
