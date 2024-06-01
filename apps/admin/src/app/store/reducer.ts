import { combineReducers } from "redux";
import { api } from "../api";
import { filterStore } from "~features/filter";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [filterStore.name]: filterStore.reducer,
});
