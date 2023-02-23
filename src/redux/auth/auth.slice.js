import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constans/status.constans";
import { authInitState } from "./auth.init-state";
import { authLoginThunk, authLogOutThunk, authProfileCurrentThunk, authSignUpThunk } from "./auth.thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    extraReducers: builder => {
        builder.addCase(authSignUpThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authSignUpThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        }).addCase(authSignUpThunk.rejected, state => {
            state.status = STATUS.error;
        })
            .addCase(authLoginThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authLoginThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        }).addCase(authLoginThunk.rejected, state => {
            state.status = STATUS.error;
        })
            .addCase(authProfileCurrentThunk.pending, state => {
                state.status = STATUS.loading;
                state.isRefreshing = true;
                
        }).addCase(authProfileCurrentThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.user = payload.user;
            state.isLoggedIn = true;
            state.isRefreshing = true;
        }).addCase(authProfileCurrentThunk.rejected, state => {
            state.status = STATUS.error;
            state.isRefreshing = true;
        })
            .addCase(authLogOutThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authLogOutThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.user = null;
            state.isLoggedIn = false;
            state.token = null;
        }).addCase(authLogOutThunk.rejected, state => {
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