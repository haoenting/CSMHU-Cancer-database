import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // 已登入就自動跳轉
  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/Catalog');
    }
  }, [isAuthenticated, loading, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
    if (name === 'account') setAccount(newValue);
    else if (name === 'password') setPassword(newValue);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const result = await login(account, password);
    if (result.success) {
      alert('登入成功！');
      navigate('/Catalog');
    } else {
      alert(result.error);
    }
  };

  const TurnRegisterPage = () => navigate('/Register');

  if (loading) return <p>載入中...</p>;

  return (
    <div className="containe">
      <form onSubmit={handleSubmit} className="login-container">
        <div className="login-group">
          <label htmlFor="account" className="label">帳號 :</label>
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
        <div className="login-group">
          <label htmlFor="password" className="label">密碼 :</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            maxLength={20}
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password-btn">
            顯示密碼
          </button>
        </div>
        <div className="action-group">
          <button className="action-button" type="submit">登入</button>
          <button className="action-button" type="button" onClick={TurnRegisterPage}>註冊</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
