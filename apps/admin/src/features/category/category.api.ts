import { api } from "~app";
import type { Category } from "./types";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<Category, { id: string }>({
      query: ({ id }) => ({ method: "GET", url: `category/${id}` }),
      providesTags: ["category"],
    }),
  }),
});
export const { useGetCategoryQuery } = categoryApi;
