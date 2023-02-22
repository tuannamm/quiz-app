// import library
import { Outlet } from "react-router-dom";
import "./App.scss";

// import component
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
