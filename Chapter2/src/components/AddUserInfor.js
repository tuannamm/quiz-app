import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Tuan Nam",
    address: "Sai Gon",
    age: 21,
  };

  handleClick = (event) => {
    console.log("Hello World");
    console.log("My name is " + this.state.name);

    this.setState({
      name: "Tun Nom",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        My name is {this.state.name} and I'm {this.state.age}
        <button onClick={this.handleClick}>Click me</button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default UserInfor;
