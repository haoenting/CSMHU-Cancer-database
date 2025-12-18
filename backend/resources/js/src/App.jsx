import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Header, Login, Register, Dashboard } from "./components";

import { useAuth } from "./context/AuthContext";


function PrivateRoute() {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
function PublicRoute() {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

function App() {
  const { user, loading } = useAuth();
  return (
    <>
      <Header />
      {loading ? <div>Loading...</div> : 
      <Routes>
        {/* 公開 */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 私有 */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 根目錄&亂打 */}
        <Route
          path="/"
          element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
        />
        <Route
          path="*"
          element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
      }
    </>
  );
}

export default App;

