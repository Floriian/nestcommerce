import { Dispatch, createContext } from "react";
import { initialState } from "./initialState";
import { BaseFilter } from "~types/BaseFilter";

export const ProductFilterContext =
  createContext<BaseFilter.BaseFilter>(initialState);

export const ProductFilterDispatch = createContext<
  Dispatch<BaseFilter.Payload> | unknown
>(null);
