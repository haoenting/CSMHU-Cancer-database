// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Header, Login, Register} from "./components";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} /> {/* 預設頁面 */}
      </Routes>
    </div>
  );
}

export default App;
