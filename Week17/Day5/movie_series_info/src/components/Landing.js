import React from "react";
import SearchForm from "./SearchForm";
import MovieContainer from "./MovieContainer";
const APIKey = "874c3e83";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?apikey=${APIKey}&s=hello`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ movies: data.Search })
      );
  }

  render() {
    return (
      <div>
        <SearchForm />
        <MovieContainer
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default Landing;
