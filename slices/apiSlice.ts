import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders(headers) {
      headers.set("accept", "application/json ");
      let token = null;
      if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
      }
      headers.set("authorization", `Bearer ${token && token}`);
      return headers;
    },
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({}),
});
