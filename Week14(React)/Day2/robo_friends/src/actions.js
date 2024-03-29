import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./constants";

export const setSearchfield = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch(
    "http://jsonplaceholder.typicode.com/users"
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error,
      })
    );
};
