import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const response = await apiClient.get('/user');
            setUsername(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            setUsername(null);
            setIsAuthenticated(false);
            navigate('/');
        }
    };

   
    const register = async (username, account, password) => {
      try {
          await apiClient.post('/register', {
              username,
              account,
              password
          });
          return { success: true };
      } catch (error) {
          return {
              success: false,
              error: error.response?.data?.message 
          };
      }
    };
  
    const login = async (account, password) => {
      try {
        await apiClient.post('/login', {
          account,
          password
        });
        setIsAuthenticated(true);
        return { success: true};
      } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || '登入失敗'
        };
      };
    };
      
    const logout = () => {
        setIsAuthenticated(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);


    return (
        <AuthContext.Provider value={{ 
          isAuthenticated,username, checkAuth,
          register, login, logout
           }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};