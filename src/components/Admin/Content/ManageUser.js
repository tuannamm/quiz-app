import AddNewUserModal from "./Modal/AddNewUserModal";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="manage-title">Manage User</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table users
          <AddNewUserModal />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
