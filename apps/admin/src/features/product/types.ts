import { Category } from "~features/category";
import { BaseEntity } from "~types/BaseEntity";

export interface Product extends BaseEntity {
  price: number;
  category: Category;
  active: boolean;
}
