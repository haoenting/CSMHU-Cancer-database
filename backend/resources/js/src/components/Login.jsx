import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../context/AuthContext";

function Login({  }) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/sanctum/csrf-cookie"); // Laravel Sanctum
      const res = await axios.post("/login", { account, password }, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.username);
        alert("登入成功");
        navigate("/dashboard", { replace: true });
      }
      else alert(res.data.message || "登入失敗");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="page-content">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="account">Account</label>
            <input
              type="text"
              id="account"
              name="account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              maxLength={20}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={20}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="login-btn">Login</button>
          <p className="signup-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
