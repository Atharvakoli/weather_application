const getWeatherDescription = (temperature) => {
  if (temperature <= 0) {
    return "Freezing";
  } else if (temperature > 0 && temperature <= 10) {
    return "Cold";
  } else if (temperature > 10 && temperature <= 20) {
    return "Cool";
  } else if (temperature > 20 && temperature <= 30) {
    return "Warm";
  } else {
    return "Hot";
  }
};

function buildApiUrl(endpoint, queryObj) {
  const queryString = new URLSearchParams(queryObj).toString();
  return `${endpoint}?${queryString}`;
}

const setNavigation = (navigation, navigate) => {
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

function handleSave() {}

export { getWeatherDescription, buildApiUrl, setNavigation, handleSave };
