import type { ActiveOptions } from "~features/category/types";

export interface CategoryFilter {
  active?: ActiveOptions;
  searchText?: string;
}
export type Action = "setSearchText" | "setActive";
export interface Payload {
  action: Action;
  payload: CategoryFilter;
}
