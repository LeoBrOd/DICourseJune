import React from "react";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      age: "",
      errormessage: "",
      value: "",
      option: "",
    };
    this.handleChange =
      this.handleChange.bind(this);
    this.handleChangeArea =
      this.handleChangeArea.bind(this);
  }

  inputNameText = (e) => {
    this.setState({ userName: e.target.value });
  };

  inputAge = (e) => {
    if (isNaN(e.target.value)) {
      this.setState({
        errormessage: "Your age must be a number",
      });
    } else {
      return this.setState({
        age: e.target.value,
      });
    }
  };

  mySubmitHandler = () => {
    const outputName = this.state.userName;
    const outputAge = this.state.age;
    alert(
      `You are submitting ${outputName} ${outputAge}`
    );
  };

  handleChange = (e) => {
    this.setState({ option: e.target.value });
    this.props.sendToParent(e.target.value);
  };

  handleChangeArea(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let header = "";
    if (this.state.userName !== "") {
      header = `Hello ${this.state.userName} ${this.state.age}`;
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h2>{header}</h2>
        <div>
          <p>Enter your name:</p>
          <input
            type="text"
            name="nameInput"
            onChange={this.inputNameText}
          />
          <p>Enter your age:</p>
          <input
            type="number"
            name="ageInput"
            max="150"
            onChange={this.inputAge}
          />
          <p>{this.state.errormessage}</p>
          <button type="submit">Submit</button>
        </div>
        <textarea
          value={this.state.value}
          onChange={this.handleChangeArea}
        />
        <select
          name="name"
          onChange={this.handleChange}
        >
          <option value="Ford">Ford</option>
          <option value="Volvo" defaultValue>
            Volvo
          </option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    );
  }
}

export default Forms;
