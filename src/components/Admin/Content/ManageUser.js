import { useState } from "react";
import "./ManageUser.scss";

import TableUsers from "./tableUsers";
import AddNewUserModal from "./Modal/AddNewUserModal";

const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="manage-title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new" onClick={() => setShowModal(!showModal)}>
          <button className="btn-add">Add new users</button>
        </div>
        <div>{<TableUsers />}</div>
        {showModal && <AddNewUserModal />}
      </div>
    </div>
  );
};

export default ManageUser;
