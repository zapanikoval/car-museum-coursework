import React from "react";
import ReactDOM from "react-dom";
import App from "./frontend/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./frontend/utils/reducer";
import SignIn from "./frontend/containers/SignIn";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);
