import { BaseEntity } from "@/types";

export interface Category extends BaseEntity {
  products: unknown[];
  url: string;
}
