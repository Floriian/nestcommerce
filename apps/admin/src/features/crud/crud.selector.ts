import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/";

function rootSelector(state: RootState) {
  return state.crud;
}

export const getCrud = createSelector(rootSelector, (resources) => ({
  resources,
}));
