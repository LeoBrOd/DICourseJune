import React from "react";

class FirstUser extends React.Component {
  constructor() {
    super();
    this.state = {
      firstUser: "",
    };
  }

  handleClick() {
    const { num1, num2 } = this.state;
    this.setState({
      num1: Number(num1) + Number(num2),
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]:value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { num1, num2 } = this.state;
    this.setState({
      sum: Number(num1) + Number(num2),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Select name"
              name="firstUser"
              value={this.state.firstUser}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default FirstUser;
