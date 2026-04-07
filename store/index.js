
import { configureStore, createSlice } from '@reduxjs/toolkit'
import itemslice from './itemslice';




const myntrastore = configureStore({
    reducer: {
        items: itemslice.reducer
    }
});

export default myntrastore