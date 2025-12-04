// resources/js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App'; // 你的主要 App 元件

const rootEl = document.getElementById('root');

if (rootEl) {
    ReactDOM.createRoot(rootEl).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
