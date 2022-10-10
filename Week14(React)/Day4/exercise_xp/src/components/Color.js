import React from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          favoriteColor: "yellow",
        }),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h2>
          My favorite color is{" "}
          {this.state.favoriteColor}
        </h2>
        <button onClick={this.changeColor}>
          Change favorite color
        </button>
      </div>
    );
  }
}

export default Color;
