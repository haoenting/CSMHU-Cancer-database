import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const clean = value.slice(0, 20);

    if (name === "username") setUsername(clean);
    if (name === "account") setAccount(clean);
    if (name === "password") setPassword(clean);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !account || !password) {
      alert("帳號與密碼不得為空");
      return;
    }

    try {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/register", {
        username: username,
        account: account,
        password: password,
      });

      alert("註冊成功，請登入！");
      navigate("/login");
    } catch (err) {
        const message = err.response?.data?.message || err.message || "註冊失敗";
      alert("註冊失敗: " + message);
      console.error(err);
    }
  };

  return (
    <div className="page-content">
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label><br />
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              maxLength={20}
            />
          </div>

          <div className="input-group">
            <label>Account</label><br />
            <input
              type="text"
              name="account"
              value={account}
              onChange={handleInputChange}
              maxLength={20}
            />
          </div>

          <div className="input-group">
            <label>Password</label><br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              maxLength={20}
            />
          </div>

          <button type="submit" className="login-btn">Register</button>
          <p className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
