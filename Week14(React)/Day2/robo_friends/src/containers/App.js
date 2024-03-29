import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from "./components/robots";
import {
  requestRobots,
  setSearchfield,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) =>
      dispatch(
        setSearchfield(event.target.value)
      ),
    onRequestRobots: () =>
      requestRobots(dispatch(requestRobots())),
  };
};

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     // robots: robots,
  //     robots: [],
  //   };
  // }
  componentDidMount() {
    //   fetch(
    //     "http://jsonplaceholder.typicode.com/users"
    //   )
    //     .then((res) => res.json())
    //     .then((users) =>
    //       this.setState({ robots: users })
    //     );
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState({
  //     searchField: event.target.value,
  //   });
  // };
  render() {
    // const { robots } = this.state;
    // const { robots, searchField } = this.state;
    const {
      searchField,
      onSearchChange,
      robots,
      isPending,
    } = this.props;
    const filterRobots = robots.filter(
      (robot) => {
        return robot.name
          .toLowerCase()
          .includes(searchField.toLowerCase());
      }
    );
    // if (robots.lengt) {
    //   return <h1>Loading</h1>;
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">RoboFriends</h1>
    //       <SearchBox
    //         searchChange={onSearchChange}
    //       />
    //       <Scroll>
    //         <ErrorBoundary>
    //           <CardList robots={filterRobots} />
    //         </ErrorBoundary>
    //       </Scroll>
    //     </div>
    //   );
    // }
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={onSearchChange}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
