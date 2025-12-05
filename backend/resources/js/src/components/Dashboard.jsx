import React from "react";
import axios from "axios";

function Dashboard({ user, setUser }) {
  const handleLogout = async () => {
    await axios.post("/api/logout");
    setUser(null);
  };

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
