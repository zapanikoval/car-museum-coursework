import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./utils/reducer";
import fetchCars from "./utils/fetchCars";

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchCars());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
