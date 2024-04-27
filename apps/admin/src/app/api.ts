import { axiosBaseQuery } from "@utils/axios";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_PUBLIC_API_URL }),
  endpoints: () => ({}),
  tagTypes: ["category"],
});
