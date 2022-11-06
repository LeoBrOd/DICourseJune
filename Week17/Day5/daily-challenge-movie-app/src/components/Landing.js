import React from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import MovieContainer from "./MovieContainer";
import {
  setSearchfield,
  fetchMovies,
} from "../Redux/Actions";

class Landing extends React.Component {
  componentDidMount() {
    this.props.onRequestMovies();
  }
  render() {
    const { setSearchfield, onSearchChange } =
      this.props;
    return (
      <div>
        <SearchForm />
        <MovieContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.requestMovies.movies,
    loading: state.requestMovies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) =>
      dispatch(
        setSearchfield(event.target.value)
      ),
    onRequestMovies: () =>
      fetchMovies(dispatch(fetchMovies())),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
