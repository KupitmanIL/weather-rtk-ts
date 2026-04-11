import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../api/weatherActions";

export type WeatherState = {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
    loading: boolean;
};

const initialState: WeatherState = {
    country: "",
    city: "",
    temp: 0,
    pressure: 0,
    sunset: 0,
    loading: false,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<{
                country: string;
                city: string;
                temp: number;
                pressure: number;
                sunset: number;
            }>) => {
                state.country = action.payload.country;
                state.city = action.payload.city;
                state.temp = action.payload.temp;
                state.pressure = action.payload.pressure;
                state.sunset = action.payload.sunset;
                state.loading = false;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.country = "";
                state.city = "";
                state.temp = 0;
                state.pressure = 0;
                state.sunset = 0;
                state.loading = false;
            });
    },
});

export default weatherSlice.reducer;