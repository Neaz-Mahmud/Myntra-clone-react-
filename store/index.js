import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemslice from "./itemslice";
import cartslice from "./cartslice";

const myntrastore = configureStore({
  reducer: {
    items: itemslice.reducer,
    cartslice: cartslice.reducer,
  },
});

export default myntrastore;
