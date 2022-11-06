const APIKey = "874c3e83";
export const FETCH_MOVIES_PENDING =
  "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCESS =
  "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILED =
  "FETCH_MOVIES_FAILED";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export const setSearchfield = (text) => ({
  type: SEARCH_MOVIE,
  payload: text,
});

export const fetchMovies = () => (dispatch) => {
  dispatch({ type: FETCH_MOVIES_PENDING });
  fetch(
    // `https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`
    `https://www.omdbapi.com/?apikey=${APIKey}&s=
    iron`
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: FETCH_MOVIES_FAILED,
        payload: error,
      })
    );
};
