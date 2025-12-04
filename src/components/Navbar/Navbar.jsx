import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(console.log("Log out successfully!"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:sticky top-0 bg-[#ffffff92] shadow-sm backdrop-blur hover:font-bold transition-all duration-300 z-50">
      <div className="navbar w-full md:w-11/12 m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-games"
                  className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
                >
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                {user ? (
                  <Link to="/dashboard" className="ml-3">
                    <div className="w-7 h-7 rounded-full p-0.5 bg-linear-to-br from-indigo-500 to-purple-500">
                      <img
                        className="w-full h-full rounded-full border-2 border-white"
                        src={user.photoURL}
                        alt="User Avatar"
                      />
                    </div>
                    <span className="montserrat font-medium">Dashboard</span>
                  </Link>
                ) : (
                  <NavLink
                    to="/sign-up"
                    className="ml-3 montserrat font-medium"
                  >
                    Sign Up
                  </NavLink>
                )}
              </li>
              <li>
                {user ? (
                  <button
                    onClick={handleSignout}
                    className="btn ml-3 montserrat font-medium text-white bg-linear-to-br from-indigo-500 to-purple-500"
                  >
                    Log Out
                  </button>
                ) : (
                  <NavLink to="/log-in" className="ml-3 montserrat font-medium">
                    Log In
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="roboto font-extrabold text-3xl bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-widest"
          >
            Gamora
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <NavLink
                to="/"
                className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-games"
                className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
              >
                Games
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="ml-3 montserrat font-medium hover:font-bold transition-all duration-300"
              >
                Contact
              </NavLink>
            </li>
            <li>
              {user ? (
                <Link to="/dashboard" className="ml-3">
                  <div className="w-12 h-12 rounded-full p-0.5 bg-linear-to-br from-indigo-500 to-purple-500">
                    <img
                      className="w-full h-full rounded-full border-2 border-white"
                      src={user.photoURL}
                      alt="User Avatar"
                    />
                  </div>
                </Link>
              ) : (
                <NavLink
                  to="/sign-up"
                  className="btn ml-3 montserrat font-medium text-white bg-linear-to-br from-indigo-500 to-purple-500"
                >
                  Sign Up
                </NavLink>
              )}
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleSignout}
                  className="btn ml-3 montserrat font-medium text-white bg-linear-to-br from-indigo-500 to-purple-500"
                >
                  Log Out
                </button>
              ) : (
                <NavLink
                  to="/log-in"
                  className="btn ml-3 montserrat font-medium text-white bg-linear-to-br from-indigo-500 to-purple-500"
                >
                  Log In
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
