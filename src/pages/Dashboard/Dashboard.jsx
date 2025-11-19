import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import { Link } from "react-router";

const Dashboard = () => {
  const { user } = use(AuthContext);
  usePageTitle(user.displayName);

  return (
    <div className="py-10 bg-linear-to-br from-indigo-500 to-purple-500">
      <div className="w-11/12 m-auto">
        <div className="flex items-center justify-between px-6 pt-4">
          <div className="flex items-center gap-3">
            <h1 className="montserrat text-lg md:text-2xl font-semibold text-white">
              <span className="hidden md:block">Welcome,</span>{" "}
              <span className="font-bold">{user.displayName}</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={user.photoURL}
              alt="user"
              className="w-10 h-10 md:w-20 md:h-20 rounded-full border-2 border-white hover:shadow-2xl transition-transform duration-300"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              Profile Overview
            </h2>
            <p className="text-gray-300 mb-4">
              Here's your account information and recent activity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-1">Name</h3>
                <p className="text-gray-900">{user.displayName}</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-1">Email</h3>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-1">User ID</h3>
                <p className="text-gray-900 truncate">{user.uid}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to="/update-user"
              className="btn btn-dash btn-success text-white"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
