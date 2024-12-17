import { Link } from "react-router-dom";
const Search = () => {
  const locations = [
    {
      id: 1136412,
      name: "Virar",
      region: "Maharashtra",
      country: "India",
      lat: 19.47,
      lon: 72.8,
      url: "virar-maharashtra-india",
    },
    {
      id: 1136410,
      name: "Virarajendrapet",
      region: "Karnataka",
      country: "India",
      lat: 12.2,
      lon: 75.8,
      url: "virarajendrapet-karnataka-india",
    },
    {
      id: 822859,
      name: "Virargues",
      region: "Auvergne",
      country: "France",
      lat: 45.13,
      lon: 2.92,
      url: "virargues-auvergne-france",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Location Cards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <Link href={`https://example.com/${location.url}`} key={location.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {location.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {location.region}, {location.country}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Lat: {location.lat}</span>
                  <span>Lon: {location.lon}</span>
                </div>
              </div>
              <div className="bg-gray-100 px-6 py-4">
                <p className="text-sm text-gray-600">View details</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
