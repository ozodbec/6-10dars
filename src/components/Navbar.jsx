//react icons
import { FaLayerGroup } from "react-icons/fa6";
import { LiaCalendarPlusSolid } from "react-icons/lia";

//rrd imports
import { Link } from "react-router-dom";

//components
import Weather from "./Weather";
import ThemeToggle from "./ThemeToggle";
import Profile from "./Profile";
import { useSelector } from "react-redux";

function Navbar() {
  const { calculator } = useSelector((state) => state.user);
  const amount = calculator.amount;
  return (
    <div className="w-full shadow-md  max-w-[1400px] mx-auto ">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <Weather />
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-2xl font-bold m-0">
              Online<span className="text-green-500">shop</span>
            </Link>
          </div>
          <div className="hidden lg:flex w-full justify-center">
            <ul className="menu menu-horizontal px-1 flex gap-10 items-center">
              <li>
                <Weather />
              </li>
              <div className="dropdown dropdown-hover"></div>
            </ul>
          </div>
          <div className="navbar-end flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/store" className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-green-500">
                    {amount}
                  </span>
                </div>
              </div>
            </Link>
            <Profile />
          </div>
        </div>
      </div>
      <hr className="h-1 bg-gray-200 mt-2" />
    </div>
  );
}

export default Navbar;
