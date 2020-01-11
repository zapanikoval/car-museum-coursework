import React from "react";
import cars from "./zaz";
import "../styles/CarInfo.scss";
import Paper from "@material-ui/core/Paper";

export default class CarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {}
    };
  }

  componentDidMount() {
    const car = cars.find(car => car.id === this.props.match.params.carId);
    this.setState({ car });
  }

  render() {
    const { car } = this.state;
    return (
      <div className="container body">
        <div className="car-info col-6">
          <img
            src={car.img}
            alt={car.name}
            className="img-thumbnail car-image"
          />
          <Paper className="car-descr">
            {car.fullDescr}
          </Paper>
        </div>
      </div>
    );
  }
}
