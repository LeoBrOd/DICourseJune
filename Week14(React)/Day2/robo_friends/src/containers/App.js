import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from "./components/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // robots: robots,
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      "http://jsonplaceholder.typicode.com/users"
    )
      .then((res) => res.json())
      .then((users) =>
        this.setState({ robots: users })
      );
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(
      (robot) => {
        return robot.name
          .toLowerCase()
          .includes(searchField.toLowerCase());
      }
    );
    if (robots.lengt) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
