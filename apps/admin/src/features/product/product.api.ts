import { api } from "~app/api";
import { Product } from "./types";
import { PaginationResponse } from "~types/PaginationResponse";
import { createUrlQuery } from "~utils/createUrlQuery";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      PaginationResponse<Product[]>,
      {
        page?: number;
        limit?: number;
        text?: string;
        active?: boolean | "ALL";
      }
    >({
      query: (data) => ({
        method: "GET",
        url: `/product/admin${createUrlQuery(data)}`,
      }),
      providesTags: ["product"],
    }),
    getProduct: builder.query<Product, { id: string }>({
      query: ({ id }) => ({ method: "GET", url: `/product/admin/${id}` }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
