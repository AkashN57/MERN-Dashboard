import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProduct: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTranactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: {
          page,
          pageSize,
          sort,
          search,
        },
        providesTags: ["Transactions"],
      }),
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    // getAdmins: build.query({
    //   query: () => "managment/admins",
    //   tagTypes: ["Admins"],
    // }),
    getUserPerformace: build.query({
      query: (id) => `managment/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductQuery,
  useGetCustomersQuery,
  useGetTranactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  // useGetAdminsQuery,
  useGetUserPerformaceQuery,
  useGetDashboardQuery
} = api;
