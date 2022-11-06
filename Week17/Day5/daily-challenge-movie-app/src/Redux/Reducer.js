import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  SEARCH_MOVIE,
} from "./Actions";

const initialStateSearch = {
  searchField: "",
};

export const searchMovies = (
  state = initialStateSearch,
  action
) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

const initialStateMovies = {
  movies: [],
  loading: false,
  movie: [],
};

export const requestMovies = (
  state = initialStateMovies,
  action = {}
) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
