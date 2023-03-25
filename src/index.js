import React from "react";
import ReactDOM from "react-dom/client";

// import library
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import "nprogress/nprogress.css";

// import component
import Layout from "./layout";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
