import {api_key, base_url} from "../../utils/constants.ts";
import {setWeather, type WeatherState} from "../weather/weatherSlice.ts";
import {setMessage} from "../message/messageSlice.ts";
import type {AppDispatch} from "../../app/store.ts";

const emptyWeather: WeatherState = {
    country: "",
    city: "",
    temp: 0,
    pressure: 0,
    sunset: 0
};

export const fetchWeather = (city : string) => async (dispatch: AppDispatch) => {
    try {
        const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await res.json();
        dispatch(setWeather({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000
        }));
        dispatch(setMessage(''));
    } catch (e) {
        console.log(e)
        dispatch(setMessage('Enter correct city name'));
        dispatch(setWeather(emptyWeather));
    }
}