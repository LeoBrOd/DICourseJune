import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

class MovieContainer extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, i) => {
          return (
            <MovieCard
              key={i}
              poster={movies[i].Poster}
              title={movies[i].Title}
              year={movies[i].Year}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(
  MovieContainer
);
