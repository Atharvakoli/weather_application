import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { WeatherContext } from "../../context/dataFetchContext";
import Timer from "./Timer";

const Admin = () => {
  const { weatherState, postData, getData } = useContext(WeatherContext);
  const navigate = useNavigate();
  let access_token = Cookies.get("access_token_frontend");
  const { loading, error } = weatherState;

  const [showMessage, setShowMessage] = useState(false);

  const weathers = weatherState.weathers;

  useEffect(() => {
    if (!access_token) navigate("/");
  }, [access_token, navigate]);

  const location = weatherState.current_weather.location;
  const current = weatherState.current_weather.current;
  const forecast = weatherState.weather_forecast;

  const weatherDetails = {
    location: {
      ...location,
    },
    current: {
      ...current,
    },
    forecast: {
      ...forecast.forecast,
    },
  };

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-2">
        <nav className="bg-white border-gray-200 mb-2">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link
                    to="/admin"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                    aria-current="page"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/current"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Current
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/forecast"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Forecast
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/forecastday"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Forecastday
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/day"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Day
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/hour"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Hour
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/astro"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Astro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/condition"
                    className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    Condition
                  </Link>
                </li>
              </ul>
            </div>
            {showMessage && (
              <Timer
                loading={loading}
                error={error}
                message={weathers.message}
                onClose={handleCloseMessage}
              />
            )}
            <button
              type="button"
              onClick={() => postData(weatherDetails, handleShowMessage)}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                <>Save weather</>
              )}
            </button>
            <button
              type="button"
              onClick={() => getData(handleShowMessage)}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                <>Get weathers</>
              )}
            </button>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
