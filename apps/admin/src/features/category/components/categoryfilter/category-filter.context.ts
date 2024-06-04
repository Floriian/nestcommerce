import { Dispatch, createContext } from "react";
import type { CategoryFilter, Payload } from "./types";
import { initialState } from "./initialState";

export const CategoryFilterContext =
  createContext<CategoryFilter>(initialState);

export const CategoryFilterDispatch = createContext<
  Dispatch<Payload> | unknown
>(null);
