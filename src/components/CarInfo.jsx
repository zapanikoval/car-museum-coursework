import React from "react";
import "../styles/CarInfo.scss";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { connect } from "react-redux";

class CarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {}
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { cars } = this.props;
    const car = cars.find(car => car.id === this.props.match.params.carId);
    this.setState({ car });
  }
  onClickHandler() {
    this.props.history.goBack();
  }

  render() {
    const { car } = this.state;
    return (
      <div className="container bodyy pt-3 pb-3">
        <Button
          variant="contained"
          size="large"
          className="mb-4"
          onClick={this.onClickHandler}
        >
          <ArrowBackIcon />
          &nbsp; вернуться
        </Button>
        <div className="row">
          <div className="car-info col-6">
            <img
              src={car.img}
              alt={car.name}
              className="img-thumbnail car-image"
            />
            <Paper className="car-descr">{car.fullDescr}</Paper>
          </div>
          <div className="col-6 car-params">
            <table className="table table-bordered table-light table-hover">
              <tbody>
                <tr>
                  <th className="table-theme" scope="row">
                    Название авто:
                  </th>
                  <td>{car.name}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Двигатель:
                  </th>
                  <td>{car.motor}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Тип двигателя:
                  </th>
                  <td>{car.motorType}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Топливо:
                  </th>
                  <td>{car.gas}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Мощность:
                  </th>
                  <td>{car.power}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Максимальная скорость:
                  </th>
                  <td>{car.maxSpeed}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Объем двигателя:
                  </th>
                  <td>{car.vol}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Цилиндров:
                  </th>
                  <td>{car.rams}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Кол-во мест в салоне:
                  </th>
                  <td>{car.countPlaces}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Трансмиссия:
                  </th>
                  <td>{car.transmission}</td>
                </tr>
                <tr>
                  <th className="table-theme" scope="row">
                    Расход(смешанный):
                  </th>
                  <td>{car.gasRate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state
  };
}

export default connect(mapStateToProps)(CarInfo);
