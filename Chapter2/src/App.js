import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <MyComponent />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       Hello World
//       <MyComponent />
//     </div>
//   );
// };

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello World với Eric &amp; Hỏi dân IT</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
