import { combineReducers } from "redux";
import { crudSlice } from "../../features/crud/crud.slice";
import { api } from "../api";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [crudSlice.name]: crudSlice.reducer,
});
