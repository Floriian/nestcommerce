import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { PayloadAction } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addCRUD: (state, { payload }: PayloadAction<{ name: string }>) => {
      state.push(payload);
    },
  },
});

export const { addCRUD } = crudSlice.actions;
