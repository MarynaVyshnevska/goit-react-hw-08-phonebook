import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectorAuthToken } from "./auth.selector";

import { publicApi, token } from "http/http";

export const authSignUpThunk = createAsyncThunk('signup', async (values) => {
    const {data} = await publicApi.post('/users/signup', values);

    token.set(data.token);
    
    return data;
})

export const authLoginThunk = createAsyncThunk('login', async (values) => {
    const {data} = await publicApi.post('/users/login', values);

    token.set(data.token);
    // console.log(data)
    return data;
});

export const authLogOutThunk = createAsyncThunk('logout', async () => {
    const {data} = await publicApi.post('/users/logout');

    token.remove();
    
    return data;
});

export const authProfileCurrentThunk = createAsyncThunk('profile', async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    if (token === null) {
        return rejectWithValue('Sorry, you can autorized again');
    }

    try {
        token.set(token);
        const { data } = await publicApi.get('/users/current');
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
