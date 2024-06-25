import { api } from "~app/api";
import { Product } from "./types";
import { PaginationResponse } from "~types/PaginationResponse";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<PaginationResponse<Product[]>, void>({
      query: () => ({ method: "GET", url: "/product/admin/all" }),
      providesTags: ["product"],
    }),
    getProduct: builder.query<Product, { id: number }>({
      query: ({ id }) => ({ method: "GET", url: `/product/admin/${id}` }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
