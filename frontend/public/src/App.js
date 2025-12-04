// App.js
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import { Header, Login, Register, Catalog, Insert} from './main/page_index';
import './styles/global.css';

function App() {
  return (
    <div>
      <Header/>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          <Route
            path="/Catalog"
            element={
              <ProtectedRoute>
                <Catalog />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Insert" 
            element={
              <ProtectedRoute>
                <Insert mode="insert" />
              </ProtectedRoute>
            } 
          />
          <Route 
          path="/Modify" 
          element={
            <ProtectedRoute>
              <Insert mode="modify" />
            </ProtectedRoute>
          } 
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
