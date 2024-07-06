import { useReducer } from "react";
import { initialState } from "./initialState";
import { productFilterReducer } from "./product-filter.reducer";
import {
  ProductFilterContext,
  ProductFilterDispatch,
} from "./product-filter.context";

interface Props {
  children: React.ReactNode;
}

export function ProductFilterProvider({ children }: Props) {
  const [categoryFilter, dispatch] = useReducer(
    productFilterReducer,
    initialState
  );

  return (
    <ProductFilterContext.Provider value={categoryFilter}>
      <ProductFilterDispatch.Provider value={dispatch}>
        {children}
      </ProductFilterDispatch.Provider>
    </ProductFilterContext.Provider>
  );
}
