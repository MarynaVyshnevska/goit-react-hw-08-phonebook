import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constans/status.constans";
import { authInitState } from "./auth.init-state";
import { authLoginThunk } from "./auth.thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    extraReducers: builder => {
        builder.addCase(authLoginThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authLoginThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.data = payload;
        }).addCase(authLoginThunk.rejected, state => {
            state.status = STATUS.error;
        })
    }
})

const persistConfig = {
    key: 'auth',
    storage,
    // whitelist: ['data'],
};
export const authReducer = persistReducer(persistConfig, authSlice.reducer);