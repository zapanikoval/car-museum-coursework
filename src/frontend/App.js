import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SportCarPage from "./components/SportCarPage";
import MuscleCarPage from "./components/MuscleCarPage";
import ZazPage from "./components/ZazPage";
import CarInfo from "./containers/CarInfo";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from "react-redux";
import fetchCars from "./utils/fetchCars";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchCars());
  }

  render() {
    const { cars } = this.props;
    console.log("RENDER APP.JS: ", cars);
    
    if (cars !== undefined) {
      return (
        <>
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
              <ZazPage cars={cars.map(car => {
                if(car.type==="zaz") return car;
              })} />
            </Route>
            <Route path="/sport">
              <SportCarPage cars={cars.map(car => {
                if(car.type==="sport") return car;
              })}/>
            </Route>
            <Route path="/muscle">
              <MuscleCarPage cars={cars.map(car => {
                if(car.type==="muscle") return car;
              })}/>
            </Route>

            <Route path="*">
              <Redirect to="/main" />
            </Route>
          </Switch>
          <Footer />
        </>
      );
    }
    else return (
      <>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(App);