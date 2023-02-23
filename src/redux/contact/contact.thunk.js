import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { publicApi } from "http/http";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', async (_, thunkAPI) => {
        try {
            // console.log('hi')
            const { data } = await publicApi.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            // console.log('add')
            // const { data } = await publicApi.post('/contacts', newContact);
            const { data } = await publicApi.post('/contacts', {...newContact});
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const { data } = await publicApi.delete(`/contacts/${contactId}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);