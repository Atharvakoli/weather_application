const WeatherInfoCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 flex items-center">
      <div className="mr-4 text-blue-500">{icon}</div>
      <div>
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
