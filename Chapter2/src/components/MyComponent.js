import React, { useState } from "react";
import UserInfor from "./AddUserInfor";
import DisplayInfor from "./\bDisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi dan IT", age: 30 },
    { id: 2, name: "Tuan Nam", age: 18 },
    { id: 3, name: "Tun Nom", age: 22 },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    const newListUser = listUsers.filter((user) => user.id !== userId);
    setListUsers(newListUser);
  };

  //jsx

  console.log("listUsers1: ", listUsers);

  return (
    <>
      <UserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};
export default MyComponent;
