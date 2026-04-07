
import { createSlice } from '@reduxjs/toolkit'

import { defaultitems } from '../data/items';

const itemslice = createSlice(

    {
        name: "items",
        initialState: defaultitems,
        reducers: {
            addIntialitems: (store, action) => {
                return store;
            }
        }
    }
);

export default itemslice;

