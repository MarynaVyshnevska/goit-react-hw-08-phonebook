import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "http/http";
import { selectAuthToken } from "redux/auth/auth.selector";

export const getUserThunk = createAsyncThunk('user', async (state, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());
    // const stateCurrent = getState();
    // console.log(stateToken);
    // console.log(stateCurrent);
    
    if (!stateToken) {
        return rejectWithValue('Sorry, you can autorized again');
    }
    token.set(`Bearer ${stateToken}`);
    const {data} = await privateApi.get('/users/current');
    // console.log(data);
    
    return data;

})