import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Header, Login, Register, Dashboard, PrivateRoute } from "./components";

export default function App() {
  const AppRoutes = () => {
    const { user, loading } = useAuth();

    if (loading) return <p>載入中...</p>;

    return (
      <>
        <Header />
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute user={user}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </>
    );
  };

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
