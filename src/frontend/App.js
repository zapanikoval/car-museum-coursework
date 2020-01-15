import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SportCarPage from "./components/SportCarPage";
import MuscleCarPage from "./components/MuscleCarPage";
import ZazPage from "./components/ZazPage";
import CarInfo from "./containers/CarInfo";
import AdminPage from "./components/AdminPage";
import AddPage from "./components/AddPage";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import fetchCars from "./utils/carsActions/fetchCars";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchCars());
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.dispatch({ type: "LOGOUT_USER" });
  }

  render() {
    const { cars, auth } = this.props;
    console.log(cars);

    if (cars !== undefined) {
      return (
        <>
          <Header auth={auth} logOut={this.logOut} />
          <Switch>
            <Route path="/main">
              <Main />
            </Route>
            <Route
              path="/car-info/:carId"
              render={routeProps => <CarInfo {...routeProps} />}
            />
            <Route path="/zaz">
              <ZazPage
                cars={cars.map(car => {
                  if (car.type === "zaz") return car;
                })}
              />
            </Route>
            <Route path="/sport">
              <SportCarPage
                cars={cars.map(car => {
                  if (car.type === "sport") return car;
                })}
              />
            </Route>
            <Route path="/muscle">
              <MuscleCarPage
                cars={cars.map(car => {
                  if (car.type === "muscle") return car;
                })}
              />
            </Route>
            {/* {auth ? ( */}
            <Route path="/admin">
              <AdminPage cars={cars} dispatch={this.props.dispatch} />
            </Route>
            {/* ) : (
              <Redirect to="signin" />
            )} */}
            <Route path="/add">
              <AddPage dispatch={this.props.dispatch} />
            </Route>
            <Route path="*">
              <Redirect to="/main" />
            </Route>
          </Switch>
          <Footer />
        </>
      );
    } else return <h1>Загрузка...</h1>;
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(App);
