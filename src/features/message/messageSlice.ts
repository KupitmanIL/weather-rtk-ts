import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: string = "Enter city name";

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (_state, action: PayloadAction<string>) => action.payload
    }
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;