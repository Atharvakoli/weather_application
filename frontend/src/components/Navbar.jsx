import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Cloud, Sun, Search, MapPin } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { WeatherContext } from "../context/dataFetchContext";

const Navbar = () => {
  const accessToken = Cookies.get("access_token_frontend") || "";
  const { weatherState, fetchDataForType } = useContext(WeatherContext);
  const { loading } = weatherState;
  const [value, setValue] = useState("");
  const locationRef = useRef(null);

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedValue) {
      fetchDataForType("search_weather", {
        location: debouncedValue.toLowerCase(),
      });
    }
  }, [debouncedValue, fetchDataForType]);

  const handleSearch = () => {
    setValue(locationRef.current?.value);
    locationRef.current.value = null;
  };

  return (
    <nav className="bg-sky-500 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center text-white">
          <Cloud className="h-8 w-8 mr-2" />
          <Sun className="h-6 w-6 -ml-4 text-yellow-300" />
          <span className="text-xl font-semibold ml-2">WeatherApp</span>
        </Link>
        <div className="w-full max-w-lg mx-auto p-4">
          <div className="relative">
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  ref={locationRef}
                  placeholder="Search for a location..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                className="whitespace-nowrap px-4 py-2 bg-blue-500 text-white rounded-md"
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
                  <>
                    <MapPin className="mr-2" size={18} />
                    Get Location
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/">Weather</Link>
          {!accessToken ? (
            <Link to="/auth">Login</Link>
          ) : (
            <Link to="admin">Admin</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
