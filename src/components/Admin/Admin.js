import { useState } from "react";
import SideBar from "./SideBar";
import "./Admin.scss";

import { FaBars } from "react-icons/fa";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        {<FaBars onClick={() => setCollapsed(!collapsed)} />}xxxxxx
      </div>
    </div>
  );
};

export default Admin;
