import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./components/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const filterRobots = this.state.robots.filter(
      (robots) => {
        return robots.name
          .toLowerCase()
          .includes(
            this.state.searchField.toLowerCase()
          );
      }
    );
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
        />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
