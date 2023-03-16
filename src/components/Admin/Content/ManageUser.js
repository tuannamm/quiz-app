import { useState, useEffect } from "react";
import "./ManageUser.scss";

import { getAllUsers } from "../../../services/apiService";

import TableUsers from "./tableUsers";
import AddNewUserModal from "./Modal/AddNewUserModal";
import ModalUpdateUser from "./Modal/modalUpdateUser";
import ModalViewUser from "./Modal/modalViewUser";

const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
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

  const handleClickBtnUpdate = (user) => {
    setDataUpdate(user);
    setShowModalUpdateUser(true);
  };

  const handleClickBtnView = (user) => {
    setDataUpdate(user);
    setShowModalViewUser(true);
  };

  return (
    <div className="manage-user-container">
      <div className="manage-title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new" onClick={() => setShowModal(!showModal)}>
          <button className="btn-add">Add new users</button>
        </div>
        <div>
          {
            <TableUsers
              userList={userList}
              handleClickBtnUpdate={handleClickBtnUpdate}
              handleClickBtnView={handleClickBtnView}
            />
          }
        </div>
        {showModal && <AddNewUserModal getListUser={getListUser} />}
        {showModalUpdateUser && (
          <ModalUpdateUser
            showModalUpdateUser={showModalUpdateUser}
            setShowModalUpdateUser={setShowModalUpdateUser}
            dataUpdate={dataUpdate}
            getListUser={getListUser}
          />
        )}
        {showModalViewUser && (
          <ModalViewUser
            showModalViewUser={showModalViewUser}
            setShowModalViewUser={setShowModalViewUser}
            dataUpdate={dataUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default ManageUser;
