import React from "react";
import ReactDOM from "react-dom/client";

// import library
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "nprogress/nprogress.css";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// import component
import Layout from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>
);
