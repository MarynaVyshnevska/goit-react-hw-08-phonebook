import { createSlice } from "@reduxjs/toolkit";

export const filterInitState = '';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitState,
    reducers: {
        filteredContacts: (state, { payload }) => payload,
    },
});

export const { filteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;