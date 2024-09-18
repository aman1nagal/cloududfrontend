import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../apiSlice";



export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, { userName: string; password: string, rememberMe: boolean }>({
      query: (body) => ({
        method: "POST",
        url: "api/login",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    allProduct: builder.query<any,any>({
      query: (body) => ({
        method: "GET",
        url: "api/getAllProducts",
      }),
      providesTags: ["product"],
    }),

    listAllCategory: builder.query<any,any>({
      query: (body) => ({
        method: "GET",
        url: "api/getAllProductsGroup",
      }),
      providesTags: ["product"],
    }),
    addCategory:builder.mutation<any,  any>({
      query: (body) => ({
        method: "POST",
        url: "api/addProductGroup",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    getallCustomer:builder.query<any,  any>({
      query: (body) => ({
        method: "GET",
        url: "api/getAllUsersList",
      }),
      providesTags: ["product"],
    }),
    registerCustomer:builder.mutation<any,  any>({
      query: (body) => ({
        method: "POST",
        url: "api/register",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    getProductByCustomerName: builder.query<any, any>({
      query: (body) => {
        console.log(body,"aaaaaa")
        return {
          method: "GET",
          url: `api/getProductFromGroup/?groupId=${body.customerId}`,
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductByCustomerNameQuery,useLoginMutation, useAllProductQuery ,useListAllCategoryQuery ,useAddCategoryMutation ,useGetallCustomerQuery,useRegisterCustomerMutation} = authApi;