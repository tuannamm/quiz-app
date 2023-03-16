import { useState, useEffect } from "react";
import "./ManageUser.scss";

import { getAllUsers, getListUserPaginate } from "../../../services/apiService";

import AddNewUserModal from "./Modal/AddNewUserModal";
import ModalUpdateUser from "./Modal/modalUpdateUser";
import ModalViewUser from "./Modal/modalViewUser";
import ModalDeleteUser from "./Modal/modalDeleteUser";
import TableUsersPaginate from "./tableUsersPaginate";

const ManageUser = () => {
  const LIMIT_USER_QUANTITY = 10;
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUser, setDataUser] = useState();
  const [userList, setUserList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setUserList(res.DT);
    }
  };

  const getListUserWithPaginate = async (page) => {
    let res = await getListUserPaginate(page, LIMIT_USER_QUANTITY);
    if (res.EC === 0) {
      setUserList(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  useEffect(() => {
    // getListUser();
    getListUserWithPaginate(1);
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
            // <TableUsers
            //   userList={userList}
            //   handleClickBtnUpdate={handleClickBtnUpdate}
            //   handleClickBtnView={handleClickBtnView}
            //   handleClickBtnDelete={handleClickBtnDelete}
            // />
            <TableUsersPaginate
              userList={userList}
              getListUserWithPaginate={getListUserWithPaginate}
              pageCount={pageCount}
              handleClickBtnUpdate={handleClickBtnUpdate}
              handleClickBtnView={handleClickBtnView}
              handleClickBtnDelete={handleClickBtnDelete}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        </div>
        {showModal && (
          <AddNewUserModal
            getListUser={getListUser}
            getListUserWithPaginate={getListUserWithPaginate}
          />
        )}
        {showModalUpdateUser && (
          <ModalUpdateUser
            showModalUpdateUser={showModalUpdateUser}
            setShowModalUpdateUser={setShowModalUpdateUser}
            dataUser={dataUser}
            getListUser={getListUser}
            getListUserWithPaginate={getListUserWithPaginate}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
        {showModalViewUser && (
          <ModalViewUser
            showModalViewUser={showModalViewUser}
            setShowModalViewUser={setShowModalViewUser}
            dataUser={dataUser}
            getListUser={getListUser}
            getListUserWithPaginate={getListUserWithPaginate}
          />
        )}
        {showModalDeleteUser && (
          <ModalDeleteUser
            showModalDeleteUser={showModalDeleteUser}
            setShowModalDeleteUser={setShowModalDeleteUser}
            dataUser={dataUser}
            getListUser={getListUser}
            getListUserWithPaginate={getListUserWithPaginate}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ManageUser;
