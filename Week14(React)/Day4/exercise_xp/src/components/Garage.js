import React from "react";

class Garage extends React.Component {
  //   constructor() {
  //     super();
  //   }
  render() {
    return (
      <div>
        <p>
          Who lives in my {this.props.size}{" "}
          garage?
        </p>
      </div>
    );
  }
}

export default Garage;
