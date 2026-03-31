import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from "../features/weather/weatherInfoSlice.js";
import message from "../features/message/messageSlice.js";

export const store = configureStore({
    reducer: {
        weatherInfo,
        message
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch