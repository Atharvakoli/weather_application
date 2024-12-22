import axios from "axios";
import { createContext, useCallback, useEffect, useReducer } from "react";
import { buildApiUrl } from "../helper/index.helper";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "current_weather":
      return { ...state, loading: false, current_weather: action.payload };
    case "weather_forecast":
      return { ...state, loading: false, weather_forecast: action.payload };
    case "weather_search":
      return { ...state, loading: false, weather_search: action.payload };
    case "weather_history":
      return { ...state, loading: false, weather_history: action.payload };
    case "weather_alerts":
      return { ...state, loading: false, weather_alerts: action.payload };
    case "weather_astronomy":
      return { ...state, loading: false, weather_astronomy: action.payload };
    case "weather_marine":
      return { ...state, loading: false, weather_marine: action.payload };
    case "search_weather":
      return { ...state, loading: false, search_weather: action.payload };
    case "weathers":
      return { ...state, loading: false, weathers: action.payload };
    default:
      console.error("Invalid action type:", action.type);
      return state;
  }
}

const initialState = {
  weathers: null,
  current_weather: null,
  weather_forecast: null,
  weather_search: null,
  weather_history: null,
  weather_alerts: null,
  weather_astronomy: null,
  weather_marine: null,
  search_weather: null,
  loading: false,
  error: null,
};

export const WeatherContext = createContext({
  weatherState: initialState,
  dispatch: () => {},
});

function WeatherContextProvider({ children }) {
  const [weatherState, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const savedState = localStorage.getItem("weatherState");
      return savedState ? { ...init, ...JSON.parse(savedState) } : init;
    } catch (error) {
      console.error("Failed to load state from localStorage:", error);
      return init;
    }
  });

  useEffect(() => {
    const { ...persistedState } = weatherState;
    localStorage.setItem("weatherState", JSON.stringify(persistedState));
  }, [weatherState]);

  const apiEndpoints = {
    current_weather: `${import.meta.env.VITE_SERVER_BASE_URL}/current_weather`,
    weather_forecast: `${
      import.meta.env.VITE_SERVER_BASE_URL
    }/weather_forecast`,
    search_weather: `${import.meta.env.VITE_SERVER_BASE_URL}/weather_search`,
    weather_history: `${import.meta.env.VITE_SERVER_BASE_URL}/weather_history`,
    weather_alerts: `${import.meta.env.VITE_SERVER_BASE_URL}/weather_alerts`,
    weather_astronomy: `${
      import.meta.env.VITE_SERVER_BASE_URL
    }/weather_astronomy`,
    weather_marine: `${import.meta.env.VITE_SERVER_BASE_URL}/weather_marine`,
  };

  const fetchDataForType = useCallback(async (type, { location, days, dt }) => {
    const query = { q: location };
    if (type === "weather_forecast" || type === "weather_marine")
      query.days = days;
    if (type === "weather_astronomy" || type === "weather_history")
      query.dt = dt;

    const url = buildApiUrl(apiEndpoints[type], query);

    dispatch({ type: "loading" });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching ${type}`);
      }
      const data = await response.json();
      dispatch({ type, payload: data });
    } catch (error) {
      console.error(`Failed to fetch ${type}:`, error);

      const errorMessage =
        error.response?.data?.message || `Error: ${error.message}`;
      dispatch({ type: "error", payload: errorMessage });
    }
  }, []);

  const postData = useCallback(async (details, handleShowMessage) => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/weathers`,
        details
      );
      handleShowMessage();
      dispatch({ type: "weathers", payload: response.data });
    } catch (error) {
      console.log(error);
      console.error(`Failed to post data weathers":`, error);

      const errorMessage =
        error.response?.data?.message || `Error: ${error.message}`;

      dispatch({ type: "error", payload: errorMessage });
    }
  }, []);

  const getData = useCallback(async (handleShowMessage) => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_BASE_URL}/weathers`
      );
      handleShowMessage();
      dispatch({ type: "weathers", payload: response.data });
    } catch (error) {
      console.log(error);
      console.error(`Failed to get data weathers":`, error);

      const errorMessage =
        error.response?.data?.message || `Error: ${error.message}`;

      dispatch({ type: "error", payload: errorMessage });
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{ weatherState, fetchDataForType, postData, getData }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContextProvider };
