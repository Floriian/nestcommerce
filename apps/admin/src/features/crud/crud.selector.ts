import { RootState } from "@app/store";
import { createSelector } from "@reduxjs/toolkit";

function rootSelector(state: RootState) {
  return state.crud;
}

export const getCrud = createSelector(rootSelector, (resources) => ({
  resources,
}));
