import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});


function Catalog() {
  const { username } = useAuth();
  const [actions, setActions] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchActions = async () => {
      alert(username);
        try {
          const response = await apiClient.get('/getAction', {
        });
          setActions(response.data);
        } catch (error) {
            console.error('無法獲取 actions 資料:', error);
        } 
    };
    fetchActions();
  }, []);


  const [recordId, setRecordId] = useState('');
  const TurnModifyPage = async (recordId) => {
    try {
        const response = await apiClient.get(`/getData/${recordId}`);
      if (response.data.success) {
        navigate('/Modify', { state: { recordData: response.data } });
      }  
      else {
        alert(response.data.message); 
      }
    } catch (error) {
      alert(error.response.data.message); 
    }
  };


  return (
    <div>
      <div className="catalog-header">
        <p className="welcome-message">Welcome, {username}!</p>
        <div className="search-section">
          <input
            type="text"
            value={recordId}
            onChange={(e) => setRecordId(e.target.value)}
            className="record-input"
            placeholder="Search"
          />
          <button className="search-button" onClick={() => TurnModifyPage(recordId)}>搜尋</button>
        </div>
      </div>
    
      <div className="action-buttons">
        <button 
          className="action-button" 
          onClick={() => window.open('/Insert', '_blank')}>
          新增紀錄
        </button>
        <button 
          className="action-button" 
          onClick={() => window.open('/Check', '_blank')}>
            查看紀錄
        </button>
      </div>
    
      <div className="actions-table">
        <h2>Recent Actions</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((action, index) => (
              <tr key={index}>
                <td>{action.username}</td>
                <td>{action.action}</td>
                <td>{new Date(action.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
 
  );
}

export default Catalog;
