import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~app/store";

function rootSelector(state: RootState) {
  return state.crud;
}

export const getCrud = createSelector(rootSelector, (resources) => ({
  resources,
}));
