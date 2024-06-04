import { Dispatch, useContext } from "react";
import {
  CategoryFilterContext,
  CategoryFilterDispatch,
} from "./category-filter.context";
import type { Payload } from "./types";

export const useCategoryFilter = () => {
  return useContext(CategoryFilterContext);
};

export const useCategoryFilterDispatch = () => {
  return useContext(CategoryFilterDispatch) as Dispatch<Payload>;
};
