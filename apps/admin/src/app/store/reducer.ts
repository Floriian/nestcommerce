import { combineReducers } from "redux";
import { api } from "../api";
import { crudSlice } from "~features/crud";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [crudSlice.name]: crudSlice.reducer,
});
