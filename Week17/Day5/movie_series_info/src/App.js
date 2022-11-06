import React from "react";
import Landing from "./components/Landing";
import "./App.css";

class App extends React.Component {
  render() {
    // const { movies } = this.state;
    // console.log(movies);
    return (
      <div className="App">
        <header className="App-header">
          <Landing />
        </header>
      </div>
    );
  }
}

export default App;
