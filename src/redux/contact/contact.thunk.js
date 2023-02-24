import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { privateApi } from "http/http";


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
            // const { data } = await publicApi.post('/contacts', newContact);
            const { data } = await privateApi.post('/contacts', newContact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await privateApi.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshContactThunk = createAsyncThunk(
    'contacts/refreshContact',
    async ({contactId, name, number}, thunkAPI) => {
        try {
            const { data } = await privateApi.delete(`/contacts/${contactId}`, {name, number});
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);