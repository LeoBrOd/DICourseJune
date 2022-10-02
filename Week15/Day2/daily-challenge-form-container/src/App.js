import React from "react";
import Age from "./components/Age";
import Countries from "./components/Countries";
import FirstName from "./components/FirstName";
import LastName from "./components/LastName";
import GenderChoise from "./components/GenderChoise";
import Diet from "./components/Diet";
import Display from "./components/Display";

// import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "",
      selectedcountry: "",
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  handleChange = (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    console.log(e.target.name, e.target.value);
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sample form</h1>
          <div className="">
            <FirstName
              handleChange={this.handleChange}
            />
            <LastName
              handleChange={this.handleChange}
            />
            <Age
              handleChange={this.handleChange}
            />
            <GenderChoise
              handleChange={this.handleChange}
            />
            <Countries
              handleChange={this.handleChange}
            />
            <Diet
              handleChange={this.handleChange}
            />
          </div>
          <div className="bg-light-green">
            <Display result={this.state} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
