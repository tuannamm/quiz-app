import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tuan Nam",
    address: "Sai Gon",
    age: 21,
  };

  //jsx
  render() {
    return (
      <>
        <div>
          My name is {this.state.name} and I'm from {this.state.address}
        </div>
      </>
    );
  }
}
export default MyComponent;
