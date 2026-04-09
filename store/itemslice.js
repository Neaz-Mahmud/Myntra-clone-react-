
import { createSlice } from '@reduxjs/toolkit'

import { defaultitems } from '../data/items';

const itemslice = createSlice(

    {
        name: "items",
        initialState: [],
        reducers: {
            addIntialitems: (store, action) => {
                console.log(action.payload);
                return action.payload[0];
            }
        }
    }
);

export const Allitemsliceactions = itemslice.actions;
export default itemslice;

