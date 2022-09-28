import "./App.css";
import Car from "./components/Car";
import React from "react";

class App extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    const carinfo = {
      name: "Ford",
      model: "Mustang",
    };
    return (
      <div className="App">
        <header className="App-header">
          <Car
            name={carinfo.name}
            model={carinfo.model}
          />
        </header>
        <div><button onClick={this.getStores}>Click me</button></div>
      </div>
    );
  }
}

export default App;
