import React from "react";
import Blog from "../img/blog.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postsRender = posts.length ? (
      posts.map((post) => {
        return (
          <div
            className="card horizontal"
            key={post.id}
          >
            <div className="card-image">
              <img alt="Blog_image" src={Blog} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <Link to={"/" + post.id}>
                  <h4>{post.title}</h4>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>
        <h4>No post to show</h4>
      </div>
    );
    return (
      <div>
        <title>Home</title>
        {postsRender}
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
