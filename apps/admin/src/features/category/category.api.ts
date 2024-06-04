import { api } from "~app";
import { SuccessResponse } from "~types/SuccessResponse";
import { PaginationResponse } from "~types/PaginationResponse";
import { createUrlQuery } from "~utils/createUrlQuery";
import { ActiveOptions, Category } from "./types";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<Category, { id: string }>({
      query: ({ id }) => ({ method: "GET", url: `/category/${id}` }),
      providesTags: ["category"],
    }),
    getCategories: builder.query<
      PaginationResponse<Category[]>,
      {
        page?: number;
        limit?: number;
        text?: string;
        active?: ActiveOptions | undefined;
      }
    >({
      query: (data) => ({
        method: "GET",
        url: `/category/admin${createUrlQuery(data)}`,
      }),
      providesTags: ["category"],
    }),
    createCategory: builder.mutation<Category, Category>({
      query: (data) => ({
        method: "POST",
        url: "/category",
        data,
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: builder.mutation<
      Partial<Pick<Category, "_id">> & Category,
      Category
    >({
      query: (data) => ({
        method: "PATCH",
        url: `/category/${data._id}`,
        data,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation<SuccessResponse, { id: string }>({
      query: (data) => ({
        method: "DELETE",
        url: `/category/${data.id}`,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});
export const {
  useGetCategoryQuery,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
