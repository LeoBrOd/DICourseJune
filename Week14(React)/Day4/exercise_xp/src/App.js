import React from "react";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";
import Forms from "./components/Forms";
import NewBookForm from "./components/NewBookForm";
import Welcome from "./components/Welcome";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: ""};
  }

  handleCallBack = (data) => {
    this.setState({ name: data });
  };

  render() {
    const carinfo = {
      model: "Mustang",
    };
    return (
      <div className="App">
        <header className="App-header">
          <Car
            model={carinfo.model}
            name={this.state.name}
          />
          <Events />
          <Phone />
          <Color />
          <Forms
            sendToParent={this.handleCallBack}
          />
          <NewBookForm />
          <Welcome />
        </header>
      </div>
    );
  }
}

export default App;
