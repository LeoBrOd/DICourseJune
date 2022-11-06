import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movieData } = this.props;
    return (
      <div>
        <img
          src={movieData.poster}
          alt="Unavalaible"
        ></img>
        <h4>{movieData.title}</h4>
        <h5>{movieData.year}</h5>
        <button>See more...</button>
      </div>
    );
  }
}

export default MovieCard;
