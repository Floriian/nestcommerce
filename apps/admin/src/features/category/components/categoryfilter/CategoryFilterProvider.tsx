import { useReducer } from "react";
import {
  CategoryFilterContext,
  CategoryFilterDispatch,
} from "./category-filter.context";
import { categoryFilterReducer } from "./category-filter.reducer";
import { initialState } from "./initialState";

interface Props {
  children: React.ReactNode;
}

export function CategoryFilterProvider({ children }: Props) {
  const [categoryFilter, dispatch] = useReducer(
    categoryFilterReducer,
    initialState
  );

  return (
    <CategoryFilterContext.Provider value={categoryFilter}>
      <CategoryFilterDispatch.Provider value={dispatch}>
        {children}
      </CategoryFilterDispatch.Provider>
    </CategoryFilterContext.Provider>
  );
}
