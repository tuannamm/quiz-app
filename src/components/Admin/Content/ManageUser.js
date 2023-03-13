import { useState, useEffect } from "react";
import "./ManageUser.scss";

import { getAllUsers } from "../../../services/apiService";

import TableUsers from "./tableUsers";
import AddNewUserModal from "./Modal/AddNewUserModal";

const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);

  const getListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setUserList(res.DT);
    }
  };

  useEffect(() => {
    getListUser();
  }, [userList]);

  return (
    <div className="manage-user-container">
      <div className="manage-title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new" onClick={() => setShowModal(!showModal)}>
          <button className="btn-add">Add new users</button>
        </div>
        <div>{<TableUsers userList={userList} />}</div>
        {showModal && <AddNewUserModal getListUser={getListUser} />}
      </div>
    </div>
  );
};

export default ManageUser;
