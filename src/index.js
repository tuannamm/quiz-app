import React from "react";
import ReactDOM from "react-dom/client";

// import library
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import component
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
