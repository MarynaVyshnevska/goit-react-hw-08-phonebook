import { configureStore } from "@reduxjs/toolkit";
import { authInitState } from "./auth/auth.init-state";
import { authReducer } from "./auth/auth.slice";
import { contactsInitState } from "./contact/contact.init-state";
import { contactsReducer } from "./contact/contact.slice";
import { filterInitState, filterReducer } from "./contact/filter.slice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import { profileReducer } from "./profile/profile.slice";
import { profileInitState } from "./profile/profile.init-state";


const initState = {
    auth: authInitState,
    contacts: contactsInitState,
    filter: filterInitState,
    profile: profileInitState,
}

export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filterReducer,
        profile: profileReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
   
});

export const persistor = persistStore(store);