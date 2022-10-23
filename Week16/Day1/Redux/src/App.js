// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
import React from "react";
import { connect } from "react-redux";
import Child from "./components/Child";
import "./App.css";
import { handleChangeAction } from "./redux/actions";

// import {
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prop_one: "One",
      prop_two: "Two",
    };
  }

  handleChange = (e) => {
    this.setState({ prop_one: e.target.value });
  };

  render() {
    return (
      <div className="App">
        {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
        <h1>Redux Simple Example</h1>
        <div>
          Property One: {this.state.prop_one}
        </div>
        <input onChange={this.handleChange} />
        <div>
          Property Two: {this.state.prop_two}
        </div>
        <h1>Redux Store Example</h1>
        <div>Property One: {this.props.one}</div>
        <input onChange={this.props.handleC} />
        <div>Property Two: {this.props.two}</div>
        <Child />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    one: state.prop_one,
    two: state.prop_two,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleC: (e) =>
      dispatch(
        handleChangeAction(e.target.value)
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
