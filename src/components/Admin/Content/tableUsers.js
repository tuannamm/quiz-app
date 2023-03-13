import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const TableUsers = (props) => {
  const [listUser, setListUser] = useState([]);

  const getListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  useEffect(() => {
    getListUser();
  }, []);

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {listUser &&
          listUser.length !== 0 &&
          listUser.map((user, index) => {
            return (
              <tr key={`table-user-${index}`}>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="d-flex flex-row-reverse">
                  <button className="btn btn-danger">DELETE</button>
                  <button className="btn btn-warning mx-3">EDIT</button>
                  <button className="btn btn-secondary">VIEW</button>
                </td>
              </tr>
            );
          })}
        {listUser && listUser.length === 0 && <tr>NOT FOUND DATA</tr>}
      </tbody>
    </table>
  );
};

export default TableUsers;
