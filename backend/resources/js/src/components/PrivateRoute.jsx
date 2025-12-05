// resources/js/src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("auth");

  return isLoggedIn ? children : <Navigate to="/login" />;
}
