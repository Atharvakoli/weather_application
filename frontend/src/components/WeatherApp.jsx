import { useNavigate } from "react-router-dom";

const WeatherApp = () => {
  //   const [navigation, setNavigation] = useState("");
  const forecastData = [
    { day: "Mon", temp: "24°C", icon: "☀️" },
    { day: "Tue", temp: "22°C", icon: "🌤️" },
    { day: "Wed", temp: "20°C", icon: "🌧️" },
    { day: "Thu", temp: "23°C", icon: "⛅" },
    { day: "Fri", temp: "25°C", icon: "☀️" },
  ];
  const navigate = useNavigate();

  const setNavigation = (navigation) => {
    switch (navigation) {
      case "current-weather":
        navigate("/current-weather");
        break;
      case "forecast":
        navigate("/forecast");
        break;
      case "history":
        navigate("/history");
        break;
      case "alerts":
        navigate("/alerts");
        break;
      case "marine":
        navigate("/marine");
        break;
      case "astronomy":
        navigate("/astronomy");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="max-w-8xl h-screen mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div
            onClick={() => setNavigation("current-weather")}
            className="bg-gray-100 p-4 rounded-lg cursor-pointer "
          >
            <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">25°C</p>
                <p className="text-gray-600">Sunny</p>
              </div>
              <div className="text-right">
                <p>Humidity: 60%</p>
                <p>Wind: 5 km/h</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setNavigation("forecast")}
            className="bg-gray-100 p-4 rounded-lg cursor-pointer "
          >
            <h2 className="text-xl font-semibold mb-2">Forecast</h2>
            <div className="flex justify-between">
              {forecastData.map((day, index) => (
                <div key={index} className="text-center">
                  <p className="font-medium">{day.day}</p>
                  <p className="text-2xl">{day.icon}</p>
                  <p>{day.temp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("history")}
          >
            <h3 className="text-lg font-semibold mb-2">History</h3>
            <p>Past 7 days average: 23°C</p>
          </div>
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("alerts")}
          >
            <h3 className="text-lg font-semibold mb-2">Alerts</h3>
            <p>No current weather alerts</p>
          </div>
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("marine")}
          >
            <h3 className="text-lg font-semibold mb-2">Marine</h3>
            <p>Wave height: 0.5m</p>
            <p>Water temperature: 18°C</p>
          </div>
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("astronomy")}
          >
            <h3 className="text-lg font-semibold mb-2">Astronomy</h3>
            <p>Sunrise: 05:30 AM</p>
            <p>Sunset: 08:45 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
