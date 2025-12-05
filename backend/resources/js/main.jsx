// resources/js/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App'; // 你的主要 App 元件
import "./src/styles/main.css";

const rootEl = document.getElementById('app');

ReactDOM.createRoot(rootEl).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);