import { Dispatch, useContext } from "react";
import {
  ProductFilterContext,
  ProductFilterDispatch,
} from "./product-filter.context";
import { BaseFilter } from "~types/BaseFilter";

export const useProductFilter = () => {
  return useContext(ProductFilterContext);
};

export const useProductFilterDispatch = () => {
  return useContext(ProductFilterDispatch) as Dispatch<BaseFilter.Payload>;
};
