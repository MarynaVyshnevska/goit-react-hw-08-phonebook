import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contact.init-state';
import Notiflix from 'notiflix';
import { addContactThunk, deleteContactThunk, fetchContacts } from './contact.thunk';

// const contactsInitState = {
//     items: [],
//     isLoading: false,
//     error: null,
    
// };

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, state => {
            state.isLoading = true;
            // console.log('pending')
        }).addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
        }).addCase(fetchContacts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
            .addCase(addContactThunk.pending, state => {
            state.isLoading = true;
        }).addCase(addContactThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            const newContactName = state.items.find(item => (
                item.name.toLowerCase() === payload.name.toLowerCase()
            ));
            if (newContactName) {
                return Notiflix.Notify.warning(`Contact with name "${newContactName.name}" is already in your phonebook `)
            }
            const newContactPhone = state.items.find(item => (
                item.phone === payload.phone
            ));
            if (newContactPhone) {
                return Notiflix.Notify.warning(`Contact with phonenumber "${newContactPhone.phone}" is already in your phonebook `)
            }
            
            state.items.push(payload);
            
        }).addCase(addContactThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
            .addCase(deleteContactThunk.pending, state => {
            state.isLoading = true;
        }).addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = state.items.filter(item => item.id !== payload.id)
        }).addCase(deleteContactThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
    }

});

export const contactsReducer = contactSlice.reducer;