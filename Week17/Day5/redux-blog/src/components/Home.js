import React from "react";
// import blog from "../img/blog.png";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div>
        <title>Home</title>
        <p>Home page</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
