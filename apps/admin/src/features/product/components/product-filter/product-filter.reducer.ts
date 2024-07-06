import { BaseFilter } from "~types/BaseFilter";

export const productFilterReducer = (
  state: BaseFilter.BaseFilter,
  action: BaseFilter.Payload
) => {
  switch (action.action) {
    case "setActive":
      return {
        ...state,
        active: action.payload.active,
      } satisfies BaseFilter.BaseFilter;
    case "setSearchText":
      return {
        ...state,
        searchText: action.payload.searchText,
      } satisfies BaseFilter.BaseFilter;
    default:
      return state;
  }
};
