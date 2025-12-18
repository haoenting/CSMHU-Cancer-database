// resources/js/main.jsx
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from './src/App'; // 你的主要 App 元件
import "./src/styles/main.css";
import { AuthProvider } from "./src/context/AuthContext";

const rootEl = document.getElementById("root");

createRoot(rootEl).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);