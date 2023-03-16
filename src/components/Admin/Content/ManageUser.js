import { useState, useEffect } from "react";
import "./ManageUser.scss";

import { getAllUsers } from "../../../services/apiService";

import TableUsers from "./tableUsers";
import AddNewUserModal from "./Modal/AddNewUserModal";
import ModalUpdateUser from "./Modal/modalUpdateUser";
import ModalViewUser from "./Modal/modalViewUser";
import ModalDeleteUser from "./Modal/modalDeleteUser";

const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUser, setDataUser] = useState();
  const [userList, setUserList] = useState([]);

  const getListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setUserList(res.DT);
    }
  };

  useEffect(() => {
    getListUser();
  }, []);

  const handleClickBtnUpdate = (user) => {
    setDataUser(user);
    setShowModalUpdateUser(true);
  };

  const handleClickBtnView = (user) => {
    setDataUser(user);
    setShowModalViewUser(true);
  };

  const handleClickBtnDelete = (user) => {
    setDataUser(user);
    setShowModalDeleteUser(true);
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
              handleClickBtnDelete={handleClickBtnDelete}
            />
          }
        </div>
        {showModal && <AddNewUserModal getListUser={getListUser} />}
        {showModalUpdateUser && (
          <ModalUpdateUser
            showModalUpdateUser={showModalUpdateUser}
            setShowModalUpdateUser={setShowModalUpdateUser}
            dataUser={dataUser}
            getListUser={getListUser}
          />
        )}
        {showModalViewUser && (
          <ModalViewUser
            showModalViewUser={showModalViewUser}
            setShowModalViewUser={setShowModalViewUser}
            dataUser={dataUser}
            getListUser={getListUser}
          />
        )}
        {showModalDeleteUser && (
          <ModalDeleteUser
            showModalDeleteUser={showModalDeleteUser}
            setShowModalDeleteUser={setShowModalDeleteUser}
            dataUser={dataUser}
            getListUser={getListUser}
          />
        )}
      </div>
    </div>
  );
};

export default ManageUser;
