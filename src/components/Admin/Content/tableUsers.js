const TableUsers = ({
  userList,
  handleClickBtnUpdate,
  handleClickBtnView,
  handleClickBtnDelete,
}) => {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {userList &&
          userList.length !== 0 &&
          userList.map((user, index) => {
            return (
              <tr key={`table-user-${index}`}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="d-flex flex-row-reverse">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClickBtnDelete(user)}
                  >
                    DELETE
                  </button>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => handleClickBtnUpdate(user)}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => handleClickBtnView(user)}
                  >
                    VIEW
                  </button>
                </td>
              </tr>
            );
          })}
        {userList && userList.length === 0 && <tr>NOT FOUND DATA</tr>}
      </tbody>
    </table>
  );
};

export default TableUsers;
