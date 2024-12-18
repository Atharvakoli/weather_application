import { useRef } from "react";

const Home = () => {
  const location = useRef(null);
  return (
    <>
      <div className="max-w-xl mx-auto mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>
          <div className="relative">
            <input
              type="text"
              ref={location}
              placeholder="Search for a location..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto hidden">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                London, UK
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                New York, USA
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Tokyo, Japan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
