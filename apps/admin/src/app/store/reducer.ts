import { combineReducers } from "redux";
import { api } from "../api";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
