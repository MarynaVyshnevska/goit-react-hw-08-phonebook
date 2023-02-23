import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { privateApi } from "http/http";

// axios.defaults.baseURL = 'https://63ea9c71e57f2ca4eb3e3c1e.mockapi.io';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', async (_, thunkAPI) => {
        try {
            // console.log('hi')
            const { data } = await privateApi.get('/contacts');
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
            const { data } = await privateApi.post('/contacts', newContact);
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
            const { data } = await privateApi.delete(`/contacts/${contactId}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);