import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constans/status.constans";
import { userInitState } from "./user.init-state";
import { getUserThunk } from "./user.thunk";

const userSlice = createSlice({
    name: 'user',
    initialState: userInitState,
    extraReducers: builder => {
        builder.addCase(getUserThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(getUserThunk.fulfilled, (state, { payload }) => {
            state.status = STATUS.success;
            state.data = payload;
        }).addCase(getUserThunk.rejected, state => {
            state.status = STATUS.error;
        });
    },
});

export const userReducer = userSlice.reducer;