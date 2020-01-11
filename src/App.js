import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ZazPage from "./components/ZazPage";
import Main from "./components/Main";
import SportCarPage from "./components/SportCarPage";
import MuscleCarPage from "./components/MuscleCarPage";
import CarInfo from "./components/CarInfo";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route
            path="/car-info/:carId"
            render={routeProps => <CarInfo {...routeProps} />}
          />
          <Route path="/zaz">
            <ZazPage />
          </Route>
          <Route path="/sport">
            <SportCarPage />
          </Route>
          <Route path="/muscle">
            <MuscleCarPage />
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
