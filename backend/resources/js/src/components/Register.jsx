import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [userName, setUserName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // 輸入限制：只允許英文＋數字，最多 20 字
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const clean = value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 20);

    if (name === "userName") setUserName(clean);
    if (name === "password") setPassword(clean);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userName || !password) {
      alert("帳號與密碼不得為空");
      return;
    }

    try {
      // Laravel Sanctum CSRF
      await axios.get("/sanctum/csrf-cookie");

      const res = await axios.post("/api/register", {
        name: userName,
        password: password,
      });

      alert("註冊成功，請登入！");
      navigate("/login");
    } catch (err) {
      alert("註冊失敗");
      console.error(err.response?.data || err);
    }
  };

  return (
     <div className="page-content">
    <div className="login-container">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        {/* 使用者名稱 */}
        <div className="input-group">
          <label>Username</label><br />
          <input
            type="text"
            name="userName"
            value={userName}
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

        {/* 密碼 */}
        <div className="input-group">
          <label>Password</label><br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleInputChange}
            maxLength={20}
          />
        </div>

        {/* 註冊按鈕 */}
        <button type="submit" className="login-btn">
          Register
        </button>

        {/* 導向登入 */}
        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Register;
