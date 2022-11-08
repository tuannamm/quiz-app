import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

// stateless and stateful
// class DisplayInfor extends React.Component {
//   // constructor(props) {
//   //   console.log("constructor: 1");
//   //   super(props);
//   //   this.state = {
//   //     isShowListUsers: true,
//   //   };
//   // }

//   // chỉ chạy khi component nhận props mới, được cập nhật state mới, hoặc là forceUpdate
//   // componentDidUpdate(prevProps, prevState, snapshot) {
//   //   console.log("componentDidUpdate: 4");
//   //   console.log("props", this.props);
//   //   console.log("prevProps", prevProps);
//   //   if (this.props.listUsers.length !== prevProps.listUsers.length) {
//   //     console.log("List users has been changed");
//   //   }
//   // }

//   // // chạy cuối cùng
//   // componentDidMount() {
//   //   console.log("componentDidMount: 2");
//   //   setTimeout(() => {
//   //     document.title = "Tuan Nam";
//   //   }, 3000);
//   // }

//   // handleShowHide = () => {
//   //   this.setState({
//   //     isShowListUsers: !this.state.isShowListUsers,
//   //   });
//   // };

//   render() {
//     console.log("render: 3");
//     const { listUsers } = this.props;

//     return (
//       <div className="display-infor-container">
//         {/* <div
//           onClick={() => {
//             this.handleShowHide();
//           }}
//         >
//           {this.state.isShowListUsers === true
//             ? "Hide list users"
//             : "Show list users"}
//         </div> */}

//         {true && (
//           <div>
//             {listUsers?.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={+user.age <= 18 ? "green" : "red"}
//                 >
//                   <div>Name: {user.name}</div>
//                   <div>Age: {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers, handleDeleteUser } = props;

  const [isShowListUsers, setShowHideListUsers] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowListUsers);
  };

  console.log("test 1");

  useEffect(() => {
    setTimeout(() => {
      document.title = "Tuan Nam";
    }, 3000);
    console.log("list users has been changed");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      {console.log("test 3")}
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowListUsers ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowListUsers && (
        <div>
          {listUsers?.map((user) => {
            return (
              <div key={user.id} className={+user.age <= 18 ? "green" : "red"}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <div>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
