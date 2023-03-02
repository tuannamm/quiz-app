import AddNewUserModal from "./Modal/AddNewUserModal";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="manage-title">Manage User</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
        <AddNewUserModal />
      </div>
    </div>
  );
};

export default ManageUser;
