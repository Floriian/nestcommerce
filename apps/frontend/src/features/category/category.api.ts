import { api } from "@/lib";
import { Category } from "./types";

export const category = {
  getAll: async () => {
    const data = await api.get<Category[]>("/category");
    return data;
  },
  getProducts: async (url: string) => {
    const { data } = await api.get<Category>("/category/url/" + url);
    return data;
  },
};
