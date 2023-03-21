import React from "react";
import ReactDOM from "react-dom/client";

// import library
import "bootstrap/dist/css/bootstrap.min.css";

// import component
import Layout from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
