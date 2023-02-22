import { configureStore } from "@reduxjs/toolkit";
import { authInitState } from "./auth/auth.init-state";
import { authReducer } from "./auth/auth.slice";
import { contactsInitState } from "./contact/contact.init-state";
import { contactsReducer } from "./contact/contact.slice";
import { filterInitState, filterReducer } from "./contact/filter.slice";
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist';
import { persistStore } from 'redux-persist';

const initState = {
    contacts: contactsInitState,
    filter: filterInitState,
    auth: authInitState,
}
export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer,
    },

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
   
});

export const persistor = persistStore(store);