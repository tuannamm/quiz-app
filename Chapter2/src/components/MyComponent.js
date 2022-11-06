import React from "react";
import UserInfor from "./AddUserInfor";
import DisplayInfor from "./\bDisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi dan IT", age: 30 },
      { id: 2, name: "Tuan Nam", age: 18 },
      { id: 3, name: "Tun Nom", age: 22 },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };
  //jsx
  render() {
    return (
      <>
        <UserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </>
    );
  }
}
export default MyComponent;
