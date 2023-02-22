import { createAsyncThunk } from "@reduxjs/toolkit";
// import { publicApi, token, privateApi } from "http/http";
// import { selectorAuthToken } from "./auth.selector";
import axios from "axios";

export const authLoginThunk = createAsyncThunk('login', async (values) => {
    const {data} = await axios.post('https://connections-api.herokuapp.com/users/login', values);
    // const { data } = await publicApi.post('/users/login', values);
    // token.set(`${data.token_type} ${data.access_token}`)
    // console.log(data)
    return data;
});

// export const getProfileThunk = createAsyncThunk('profile', async (_, { getState, rejectWithValue }) => {
//     const stateToken = selectorAuthToken(getState());
//     if (!stateToken) {
//         return rejectWithValue();// если профиля нет
//     }
   
//     // token.set(`${stateToken.token_type} ${stateToken.access_token}`);

//     const { data } = await privateApi.get('/users/profile');
//     return data;
// })