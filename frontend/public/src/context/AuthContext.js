import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const webClient = axios.create({
    baseURL: process.env.REACT_APP_SANCTUM_URL,
    withCredentials: true,
});

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            await webClient.get('/sanctum/csrf-cookie');
            const response = await apiClient.get('/user');
            setUsername(response.data.username);
            setIsAuthenticated(true);
        } catch (error) {
            // alert(error);
            setUsername(null);
            setIsAuthenticated(false);
        } finally {
            setLoading(false); 
        }
    };


   
    const register = async (username, account, password) => {
      try {
            await apiClient.post('/register', { username, account, password });
            return { success: true };
      } catch (error) {
            return {
              success: false,
              error: error.response?.data?.message || '註冊失敗',
          };
      }
    };
  
    const login = async (account, password) => {
      try {
        await apiClient.post('/login', { account, password });
        const userResponse = await apiClient.get('/user');
        setUsername(userResponse.data.username);
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
        setUsername(null);
    };

    useEffect(() => {
        checkAuth();
    }, []);


   return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                username,
                loading, // ✅ 提供出去
                checkAuth,
                register,
                login,
                logout,
            }}
        >
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