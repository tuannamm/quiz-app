import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./\bDisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi dan IT", age: 30 },
      { id: 2, name: "Tuan Nam", age: 21 },
      { id: 3, name: "Tun Nom", age: 22 },
    ],
  };
  //jsx
  render() {
    return (
      <>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </>
    );
  }
}
export default MyComponent;
