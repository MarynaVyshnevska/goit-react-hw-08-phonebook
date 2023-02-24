import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contact.init-state';
import Notiflix from 'notiflix';
import { addContactThunk, deleteContactThunk, fetchContacts, refreshContactThunk } from './contact.thunk';
import { STATUS } from 'constans/status.constans';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, state => {
            state.isLoading = true;
            state.status = STATUS.loading;
            // console.log('pending')
        }).addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
            state.error = null;
            state.status = STATUS.success;
        }).addCase(fetchContacts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.status = STATUS.error;
        })
            .addCase(addContactThunk.pending, state => {
                state.isLoading = true;
                state.status = STATUS.loading;
        }).addCase(addContactThunk.fulfilled, (state, { payload }) => {
            state.status = STATUS.success;
            state.isLoading = false;
            const newContactName = state.items.find(item => (
                item.name.toLowerCase() === payload.name.toLowerCase()
            ));
            if (newContactName) {
                return Notiflix.Notify.warning(`Contact with name "${newContactName.name}" is already in your phonebook `)
            }
            const newContactPhone = state.items.find(item => (
                item.number === payload.number
            ));
            if (newContactPhone) {
                return Notiflix.Notify.warning(`Contact with phonenumber "${newContactPhone.number}" is already in your phonebook `)
            }
            
            state.items.push(payload);


            // const newContact = payload;
            // if (state.items.some(({ name }) =>
            //     name.toLowerCase() === payload.name.toLowerCase())) {
            //     return Notiflix.Notify.warning(`Contact with name "${newContact.name}" is already in your phonebook `)
            // } if (state.items.some(({ number }) =>
            //     number === payload.number)) {
            //     return Notiflix.Notify.warning(`Contact with phonenumber "${newContact.number}" is already in your phonebook `)
            // } else {
            //     state.items.push(payload);
            //     Notiflix.Notify.success(`Your new contact was created`)
            // }

        //     state.status = STATUS.success;
        // const newContact = payload;
        // if (state.items.some(({ name }) => name === payload.name)) {
        //   Notiflix.Notify.warning(`${newContact.name} is already in contacts`);
        // } else {
        //   state.items.push(newContact);
        //   Notiflix.Notify.success('Your contact created successfully!');
        // }
            
            // state.items.push(payload);
        }).addCase(addContactThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.status = STATUS.error;
        })
            .addCase(deleteContactThunk.pending, state => {
                state.isLoading = true;
                state.status = STATUS.loading;
        }).addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
            state.status = STATUS.success;
            state.isLoading = false;
            state.items = state.items.filter(item => item.contactId !== payload.contactId);
            Notiflix.Notify.success('Your contact deleted successfully!');
        }).addCase(deleteContactThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.status = STATUS.error;
        })
            .addCase(refreshContactThunk.pending, state => {
                state.isLoading = true;
                state.status = STATUS.loading;
        }).addCase(refreshContactThunk.fulfilled, (state, { payload }) => {
            state.status = STATUS.success;
            state.isLoading = false;
            const { id, name, number } = payload;
            const i = state.items.findIndex(item => item.id === id);
            state.items[i] = { id, name, number }
            Notiflix.Notify.success('Your contact was update successfully!');
        }).addCase(refreshContactThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.status = STATUS.error;
        })
    }

});

export const contactsReducer = contactSlice.reducer;