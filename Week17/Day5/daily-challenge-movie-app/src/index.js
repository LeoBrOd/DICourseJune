import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  searchMovies,
  requestMovies,
} from "./Redux/Reducer";

const logger = createLogger();

const rootReducer = combineReducers({
  searchMovies,
  requestMovies,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
