import React, { useState } from "react";

const UserInfor = ({ handleAddNewUser }) => {
  const [infor, setInfor] = useState({
    name: "Tuan Nam",
    address: "Sai Gon",
    age: 21,
  });

  const handleClick = (event) => {
    setInfor({
      name: "Tun Nom",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  const handleOnChangeInput = (event) => {
    setInfor({
      name: event.target.value,
    });
  };

  const handleOnChangeAge = (event) => {
    setInfor({
      age: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: infor.name,
      age: infor.age,
    });
  };

  return (
    <>
      My name is {infor.name} and I'm {infor.age}
      <button onClick={() => handleClick()}>Click me</button>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={infor.name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
      </form>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your age: </label>
        <input
          value={infor.age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserInfor;
