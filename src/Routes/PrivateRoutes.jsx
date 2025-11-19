import React, { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/log-in"></Navigate>;
};

export default PrivateRoutes;
