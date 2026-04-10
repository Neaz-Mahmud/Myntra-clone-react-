import { createSlice } from "@reduxjs/toolkit";
import { defaultitems } from "../data/items";

const cartslice = createSlice({
  name: "cartslice",
  initialState: [],
  reducers: {
    addtobag: (store, action) => {
      store.push(action.payload);
    },

    removefrombag: (store, action) => {
      const newstore = [];
      for (let i = 0; i < store.length; i++) {
        if (action.payload == store[i].id) {
          action.payload = 1000;
          continue;
        } else {
          newstore.push(store[i]);
        }
      }
      return newstore;
    },
  },
});

export const cartsliceactions = cartslice.actions;

export default cartslice;
