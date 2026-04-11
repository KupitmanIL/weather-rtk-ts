import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../api/weatherActions";

const messageSlice = createSlice({
    name: "message",
    initialState: "Enter city name",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, () => "")
            .addCase(fetchWeather.fulfilled, () => "")
            .addCase(fetchWeather.rejected, (_state, action) => {
                return action.payload || "Enter correct city name";
            });
    },
});

export default messageSlice.reducer;