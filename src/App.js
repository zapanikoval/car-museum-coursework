import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/zaz">
            <h1>Zaz</h1>
          </Route>
          <Route path="/sport">
            <h1>Sport</h1>
          </Route>
          <Route path="/muscle">
            <h1>Muscle</h1>
          </Route>
          <Route path="*">
            <Redirect to="/main" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
