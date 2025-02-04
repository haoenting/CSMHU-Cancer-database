// 檢查AuthContext的狀態，沒有登入就導向首頁 -> 用戶是否能夠訪問頁面
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, checkAuth } = useAuth();

    // 如果尚未驗證，調用 checkAuth 檢查
    React.useEffect(() => {
        if (!isAuthenticated) {
            checkAuth();
        }
    }, [isAuthenticated, checkAuth]);

    // 驗證中時顯示 loading，避免跳轉太快
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    // 如果未登入，跳轉到首頁或登入頁
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // 如果已登入，顯示子元件
    return children;
};

export default ProtectedRoute;
