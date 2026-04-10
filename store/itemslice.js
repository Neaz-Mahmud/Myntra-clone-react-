import { createSlice } from "@reduxjs/toolkit";

import { defaultitems } from "../data/items";

const itemslice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addIntialitems: (store, action) => {
      return (store = action.payload);
    },
  },
});

export const Allitemsliceactions = itemslice.actions;
export default itemslice;
