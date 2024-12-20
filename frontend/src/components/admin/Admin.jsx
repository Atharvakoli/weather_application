import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  let access_token = Cookies.get("access_token_frontend");
  useEffect(() => {
    if (!access_token) navigate("/");
  }, [access_token, navigate]);
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
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
