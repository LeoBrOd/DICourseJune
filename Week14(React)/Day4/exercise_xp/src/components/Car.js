import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "black",
    };
  }
  render() {
    return (
      <div>
        <header>
          <h1>
            This car is a {this.state.color}{" "}
            {this.props.name} {this.props.model}
          </h1>
        </header>
        <div>
          <Garage size="small" />
        </div>
      </div>
    );
  }
}

export default Car;
