import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import axios from 'axios';

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { user, login, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/dashboard");
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(account, password);
    if (result.success) navigate("/dashboard");
    else alert(result.error || "登入失敗");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const clean = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
    if (name === 'account') setAccount(clean);
    if (name === 'password') setPassword(clean);
  };

  if (loading) return <p>載入中...</p>;

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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            maxLength={20}
            required
          />
          <br/>
          <button type="button" onClick={() => setShowPassword((p) => !p)}>
            {showPassword ? "hide password" : "show password"}
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
