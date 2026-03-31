import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    weatherInfo: {}
};

const weatherInfoSlice = createSlice({
    name: "weatherInfo",
    initialState,
    reducers: {
        setWeather(state, action) {
            state.weatherInfo = action.payload;
        }
    }
});

export const { setWeather } = weatherInfoSlice.actions;
export default weatherInfoSlice.reducer;