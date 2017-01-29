import axios from "axios";

const APP_KEY = "16ac2d0b507d8599b501cc694aaade68";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${APP_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  // q=${city},de&
  const url = `${ROOT_URL}&q=${city},de`;
  const request = axios.get(url);
  // redux-promise looks at the payload
  // If the payload is a promise redux-promise stops the action
  // and once request finishes it dispatches a new action
  // with the same type but with a payload of the resolved request
  return { type: FETCH_WEATHER, payload: request };
}
