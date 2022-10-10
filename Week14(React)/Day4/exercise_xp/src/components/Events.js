import React from "react";

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };
    this.handleClick =
      this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const clickMe = () => {
      alert("I was clicked");
    };
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        alert(
          `The Enter key was pressed, your input is: ${event.target.value}`
        );
      }
    };
    return (
      <>
        <button onClick={clickMe}>
          Click me
        </button>
        <input
          id="input"
          type="text"
          placeholder="Press the ENTER key!"
          onKeyPress={handleKeyPress}
        />
        <button
          id="switcher"
          onClick={this.handleClick}
        >
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </>
    );
  }
}

export default Events;
