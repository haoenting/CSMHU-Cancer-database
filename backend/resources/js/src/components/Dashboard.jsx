import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const [recordId, setRecordId] = useState("");
  const [actions, setActions] = useState([]);

  // 模擬抓 recent actions 或從後端抓
  useEffect(() => {
    const fetchActions = async () => {
      try {
        const res = await axios.get("/getAction", { withCredentials: true });
        setActions(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        alert(err);
      }
    };

    fetchActions();
  }, []);


  // 登出
  const handleLogout = async () => {
    try {
      await axios.post("/logout", {}, { withCredentials: true });
      setUser(null);
    } catch (err) {
      console.error(err);
      alert("登出失敗");
    }
  };



  const TurnModifyPage = (id) => {
    if (!id) return alert("請輸入 Record ID");
    // 這邊可以跳到修改頁面
    window.open(`/Modify/${id}`, "_blank");
  };


  return (
    <div className="dashboard-container">
      <div className="catalog-header">
        <p className="welcome-message">Welcome, {user}!</p>

        <div className="search-section">
          <input
            type="text"
            value={recordId}
            onChange={(e) => setRecordId(e.target.value)}
            className="record-input"
            placeholder="Search"
          />
          <button
            className="search-button"
            onClick={() => TurnModifyPage(recordId)}
          >
            搜尋
          </button>
        </div>
      </div>

      <div className="action-buttons">
        <button
          className="action-button"
          onClick={() => window.open("/Insert", "_blank")}
        >
          新增紀錄
        </button>
        <button
          className="action-button"
          onClick={() => window.open("/Check", "_blank")}
        >
          紀錄查詢
        </button>
        <button className="action-button logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="actions-table">
        <h2>Recent Actions</h2>
        {actions.length === 0 ? (
          <p>No recent actions.</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}
