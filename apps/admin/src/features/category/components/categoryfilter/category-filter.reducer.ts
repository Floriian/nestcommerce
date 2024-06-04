import type { CategoryFilter, Payload } from "./types";

export const categoryFilterReducer = (
  state: CategoryFilter,
  action: Payload
) => {
  switch (action.action) {
    case "setActive":
      return {
        ...state,
        active: action.payload.active,
      } satisfies CategoryFilter;
    case "setSearchText":
      return {
        ...state,
        searchText: action.payload.searchText,
      } satisfies CategoryFilter;
    default:
      return state;
  }
};
