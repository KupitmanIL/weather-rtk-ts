import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type WeatherState = {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
};

const initialState: WeatherState = {
    country: "",
    city: "",
    temp: 0,
    pressure: 0,
    sunset: 0
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (_state, action: PayloadAction<WeatherState>) => action.payload
    }
});

export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;