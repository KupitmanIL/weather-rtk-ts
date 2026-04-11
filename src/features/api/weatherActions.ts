import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_key, base_url } from "../../utils/constants";

type WeatherData = {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
};

export const fetchWeather = createAsyncThunk<
    WeatherData,
    string,
    { rejectValue: string }
>(
    "weather/fetchWeather",
    async (city, thunkAPI) => {
        try {
            const res = await fetch(
                `${base_url}?q=${city}&appid=${api_key}&units=metric`
            );

            const data = await res.json();

            if (!res.ok || !data.sys || !data.main) {
                return thunkAPI.rejectWithValue("Enter correct city name");
            }

            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000,
            };
        } catch {
            return thunkAPI.rejectWithValue("Enter correct city name");
        }
    }
);