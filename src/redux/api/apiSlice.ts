import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "https://tasty-tales-recipe-sharing-server.vercel.app/api" }),
  tagTypes: ["Recipe", "User", "auth", "Payment"],
  endpoints: (builder) => ({
    // Mutation to create a payment order
    createOrder: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/order/create`,
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = apiSlice;
