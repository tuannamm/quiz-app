import App from "./App";

import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/HomePage/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import Dashboard from "./components/Admin/Content/Dashboard";
import Login from "./components/Auth/login";
import SignUp from "./components/Auth/signUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="manage-user" element={<ManageUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};
export default Layout;
