import { BaseEntity } from "~types";

export interface Category extends BaseEntity {
  active: boolean;
  products: unknown[]; //TODO: add real product type
}
