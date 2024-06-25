import { api } from "@/lib";
import { SignInSchema } from "./auth.schema";

export const auth = {
  signIn: async (credentials: SignInSchema) => {
    const { data } = await api.post<{ success: true }>("/auth/sign-in");
    return data;
  },
};
