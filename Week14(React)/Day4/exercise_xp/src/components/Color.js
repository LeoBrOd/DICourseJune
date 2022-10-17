import React from "react";
import Child from "./Child";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
      message: "",
      prevMessage: "",
      show: true,
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

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      prevState.favoriteColor !==
      this.state.favoriteColor
    ) {
      this.setState({
        prevMessage: `Before the update, the favorite color was ${prevState.favoriteColor}`,
      });
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.favoriteColor !==
      this.state.favoriteColor
    )
      this.setState({
        message: `My Favorite color is changed to  ${this.state.favoriteColor}`,
      });
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  changeColorToPink = () => {
    this.setState({ favoriteColor: "pink" });
  };

  deleteButton = () => {
    this.setState({ show: false });
  };

  render() {
    let display;
    if (this.state.show === true) {
      display = (
        <header>
          <Child />
        </header>
      );
    }
    return (
      <div>
        <>
          {display}
          <button onClick={this.deleteButton}>
            Delete Header
          </button>
        </>
        <h2>
          My favorite color is{" "}
          {this.state.favoriteColor}
        </h2>
        <p>{this.state.message}</p>
        <p>{this.state.prevMessage}</p>
        <button onClick={this.changeColor}>
          Change favorite color to blue
        </button>
        <button onClick={this.changeColorToPink}>
          Change favorite color to pink
        </button>
      </div>
    );
  }
}

export default Color;
