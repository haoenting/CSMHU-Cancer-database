// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true; // cookie 自動送出

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 一開始檢查 cookie
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/user"); // 後端用 Sanctum 判斷
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (account, password) => {
    try {
      await axios.get("/sanctum/csrf-cookie"); // 先拿 CSRF cookie
      const res = await axios.post("/api/login", { account, password });

      if (res.data.username) {
        setUser(res.data);
        return { success: true };
      }
      return { success: false, error: "登入失敗" };
    } catch (err) {
      console.error(err);
      return { success: false, error: "登入失敗" };
    }
  };

  const logout = async () => {
    await axios.post("/api/logout"); // 你的 logout API
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 這就是 useAuth hook
export const useAuth = () => useContext(AuthContext);
