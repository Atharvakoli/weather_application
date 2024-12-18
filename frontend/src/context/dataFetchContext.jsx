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
    default:
      console.error("Invalid action type:", action.type);
      return state;
  }
}

const initialState = {
  current_weather: null,
  weather_forecast: null,
  weather_search: null,
  weather_history: null,
  weather_alerts: null,
  weather_astronomy: null,
  weather_marine: null,
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
    current_weather: "http://localhost:3000/current_weather",
    weather_forecast: "http://localhost:3000/weather_forecast",
    weather_search: "http://localhost:3000/weather_search",
    weather_history: "http://localhost:3000/weather_history",
    weather_alerts: "http://localhost:3000/weather_alerts",
    weather_astronomy: "http://localhost:3000/weather_astronomy",
    weather_marine: "http://localhost:3000/weather_marine",
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
      dispatch({ type: "error", payload: error.message });
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherState, fetchDataForType }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContextProvider };
