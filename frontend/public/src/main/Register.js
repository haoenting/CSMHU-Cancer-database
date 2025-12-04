import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
function Register() {
  const [username, setUsername] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // 使用正則表達式確保只能輸入英文和數字，且不超過20個字元
    const newValue = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
    if (name === 'account') {
      setAccount(newValue);
    }
    if (name === 'password') {
      setPassword(newValue);
    }
  };
    
  const {register} = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    
    const result = await register(username, account, password);
    if (result.success) {
      alert('註冊成功，請重新登入！');
        navigate('/');
    } else {
      alert(result.error);
    }
  };

  const TurnLoginPage = () => {
    navigate('/');
  };

  return (
    <div>
      <ul>
        <li>請勿輸入超過20個字元</li>
        <li>帳號和密碼請使用數字或英文</li>
      </ul>
      <form onSubmit={handleSubmit} className="form">
        <div className="login-group">
          <label htmlFor="username" className="register-label">使用者名稱：</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-group">
          <label htmlFor="account" className="register-label">帳號：</label>
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
          <label htmlFor="password" className="register-label">密碼：</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            maxLength={20}
            required
          />
        </div>
        <div className="action-group">
          <button className='action-button' type="submit">確認註冊</button>
          <button className='action-button' onClick={TurnLoginPage}>返回登入</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
