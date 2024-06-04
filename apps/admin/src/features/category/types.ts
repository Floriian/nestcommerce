import { BaseEntity } from "~types";

export type ActiveOptions = "ALL" | boolean;

export interface Category extends BaseEntity {
  active: boolean;
  products: unknown[]; //TODO: add real product type
}

export interface ActiveOptionsForMenuItem {
  text: string;
  value: boolean | "ALL";
}
