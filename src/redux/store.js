import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contact/contact.slice";
import { filterReducer } from "./contact/filter.slice";


export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

   
});

