import apiSlice from "../api/apiSlice";

const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrx: builder.query({
      query: (id) => `transaction/${id}`,
    }),
    getTransactions: builder.query({
      query: () => "transaction",
    }),
  }),
});

export const { useGetTrxQuery, useGetTransactionsQuery } = transactionApi;
