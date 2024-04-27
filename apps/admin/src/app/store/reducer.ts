import { combineReducers } from "redux";
import { crudSlice } from "../../features/crud/crud.slice";

export const rootReducer = combineReducers({
  [crudSlice.name]: crudSlice.reducer,
});
