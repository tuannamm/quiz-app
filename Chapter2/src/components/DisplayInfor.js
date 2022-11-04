import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUsers: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  };

  render() {
    const { listUsers } = this.props;

    return (
      <>
        <div
          onClick={() => {
            this.handleShowHide();
          }}
        >
          {this.state.isShowListUsers === true
            ? "Show list users"
            : "Hide list users"}
        </div>

        {this.state.isShowListUsers && (
          <div>
            {listUsers?.map((user) => {
              return (
                <div
                  key={user.id}
                  className={+user.age <= 18 ? "green" : "red"}
                >
                  <div>STT: {user.id}</div>
                  <div>Name: {user.name}</div>
                  <div>Age: {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default DisplayInfor;
