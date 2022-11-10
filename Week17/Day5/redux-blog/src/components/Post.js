import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends React.Component {
  handleclick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    const postToShow = this.props.post ? (
      <div>
        <title>{this.props.post.title}</title>
        <p>{this.props.post.body}</p>
        <button
          className="waves-effect waves-light btn"
          onClick={this.handleClick}
        >
          Delete Post
        </button>
      </div>
    ) : (
      <div>
        <h1>Loading</h1>
      </div>
    );
    return <div>{postToShow}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = window.location.pathname.slice(1);
  return {
    post: state.posts.find(
      (post) => post.id === id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
