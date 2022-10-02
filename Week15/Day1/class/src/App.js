import "./App.css";
import React from "react";
import Parent from "./components/Parent";
import Child from "./components/Child";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import Calculator from "./components/Calculator";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
