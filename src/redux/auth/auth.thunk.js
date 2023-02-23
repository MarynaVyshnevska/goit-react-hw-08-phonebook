import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectorAuthToken } from "./auth.selector";

import { privateApi, publicApi, token } from "http/http";

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
    const {data} = await privateApi.post('/users/logout');

    token.remove();
    
    return data;
});

// export const getProfileThunk = createAsyncThunk('profile', async (_, {getState, rejectWithValue}) => {
//     const stateToken = getState().auth;
//     console.log(stateToken);
//     if (!stateToken) {
//         return rejectWithValue;
//     }
//     token.set(stateToken);
//     const { data } = await privateApi.get('/users/current');
//     console.log(data)
//     return data;
// })

export const getProfileThunk = createAsyncThunk('profile', async (_, {getState, rejectWithValue}) => {
    const { token } = getState().auth;
    console.log(token);
    if (token === null) {
        return rejectWithValue('Sorry, you can autorized again');
    };

    token.set(token);
    const { data } = await privateApi.get('/users/current');
    console.log(data)

})