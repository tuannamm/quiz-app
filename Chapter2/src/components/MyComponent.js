import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tuan Nam",
    address: "Sai Gon",
    age: 21,
  };

  handleClick(event) {
    console.log("Hello World");
    console.log("My name is " + this.state.name);
  }

  handleHover(event) {
    console.log("Hover");
  }

  //jsx
  render() {
    return (
      <>
        <div>
          My name is {this.state.name} and I'm from {this.state.address}
          <button onClick={this.handleClick}>Click me</button>
          <button onMouseOver={this.handleHover}>Hover me</button>
        </div>
      </>
    );
  }
}
export default MyComponent;
