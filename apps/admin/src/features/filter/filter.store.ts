import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { PayloadAction } from "@reduxjs/toolkit";

export const filterStore = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLimit: (state, { payload }: PayloadAction<number>) => {
      state.limit = payload;
    },
  },
});

export const { setLimit } = filterStore.actions;
