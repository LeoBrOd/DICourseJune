import React, { Component } from "react";
import "./Hello.css";
import "tachyons";

// class Hello extends Component {
//   render() {
//     return (
//       <div className="f1 tc">
//         <h1>Hello World!!!</h1>
//         <p>{this.props.greeting}</p>
//         <p>Welcome to React</p>
//       </div>
//     );
//   }
// }

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World!!!</h1>
      <p>{props.greeting}</p>
      <p>Welcome to React</p>
    </div>
  );
};

export default Hello;
