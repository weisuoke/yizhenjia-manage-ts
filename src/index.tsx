// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { Button } from "antd";
// import './App.css';

// type MyProps = {
//   message: string;
// };

// type MyState = {
//   count: number;
// };

// class App extends React.Component<MyProps, MyState> {
//   state: MyState = {
//     count: 0
//   };

//   render() {
//     return (
//       <div className="App">
//         <Button type="primary">Button</Button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App message={"hello"} />, document.getElementById("root"));

import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import getRouter from "./router";
import { Provider } from "react-redux";
// import store from "./redux/store";

import store from "./store"

ReactDom.render(
  <Provider store={store}>
    <Router>
      <Nav />
      {getRouter()}
    </Router>
  </Provider>,
  document.getElementById("root")
);
