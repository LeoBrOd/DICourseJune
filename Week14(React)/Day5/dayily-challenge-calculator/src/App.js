import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "",
      buttons: [
        { name: "add", action: "+" },
        { name: "substract", action: "-" },
        { name: "multiplicate", action: "*" },
        { name: "divide", action: "/" },
      ],
    };
  }

  action = () => {
    const firstNumber = parseInt(
      document.getElementById("firstNumber").value
    );
    const action = document.getElementById(
      "firstNumber"
    ).value;
    const secondNumber = parseInt(
      document.getElementById("firstNumber").value
    );
    const result = `${firstNumber}${action}${secondNumber}`;
    console.log(result);
    this.setState({ display: result });
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div>
          <input
            type="number"
            id="firstNumber"
            required
          ></input>
          <select>
            {this.state.buttons.map((item, i) => {
              return (
                <option
                  key={i}
                  id="action"
                  value={item.action}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            id="secondNumber"
            required
          ></input>
          <div>
            <button onClick={() => this.action()}>
              =
            </button>
          </div>
        </div>
        <div>
          <h1>{this.state.display}</h1>
        </div>
      </div>
    );
  }
}
export default App;
