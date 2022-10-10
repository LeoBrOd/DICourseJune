import React from "react";

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    let clickCounter = this.state.counter;
    clickCounter++;
    this.setState({ counter: clickCounter });
  };

  render() {
    if (this.state.counter > 4) {
      throw Error("I crashed!");
    }
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.counter}
        </button>
      </>
    );
  }
}

export default BuggyCounter;
