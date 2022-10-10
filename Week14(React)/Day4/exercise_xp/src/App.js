import React from "react";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";
import "./App.css";

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
          <Events />
          <Phone />
          <Color />
        </header>
      </div>
    );
  }
}

export default App;
