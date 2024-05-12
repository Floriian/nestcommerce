import { api } from "~app/api";
import { AuthSchema } from "./auth.schema";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ success: boolean }, AuthSchema>({
      query: (data) => ({ method: "POST", url: "/auth/sign-in", data }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
