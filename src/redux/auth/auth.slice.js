import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constans/status.constans";
import { authInitState } from "./auth.init-state";
import { authLoginThunk, authLogOutThunk, authSignUpThunk } from "./auth.thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import Notiflix from "notiflix";

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
            Notiflix.Notify.info('Hello!');
        }).addCase(authSignUpThunk.rejected, state => {
            state.status = STATUS.error;
            Notiflix.Notify.warning('Your email or password were wrong');
        })
            .addCase(authLoginThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authLoginThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            Notiflix.Notify.info('Welcome to your virtual Phonebook');
        }).addCase(authLoginThunk.rejected, state => {
            state.status = STATUS.error;
            Notiflix.Notify.warning('Your email or password were wrong');
        })
            .addCase(authLogOutThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authLogOutThunk.fulfilled, (state, {payload}) => {
            state.status = STATUS.success;
            state.user = authInitState.user;
            state.isLoggedIn = authInitState.isLoggedIn;
            state.token = authInitState.token;
            Notiflix.Notify.info('Bye');
        }).addCase(authLogOutThunk.rejected, state => {
            state.status = STATUS.error;
            Notiflix.Notify.warning('Your email or password were wrong');
        })
    }
})

const persistConfig = {
    key: 'auth',
    storage,
    // whitelist: ['data'],
};
export const authReducer = persistReducer(persistConfig, authSlice.reducer);