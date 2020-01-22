import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { updateCar } from "../utils/carsActions/actionsCars";

import "../styles/AddPage.scss";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      type: "",
      img: "",
      motorType: "",
      motor: "",
      transmission: "",
      countPlaces: "",
      gasRate: "",
      rams: "",
      vol: "",
      maxSpeed: "",
      power: "",
      gas: "",
      shortDescr: "",
      fullDescr: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const car = this.props.cars.find(car => {
      if (car._id === this.props.match.params.carId) return car;
    });
    this.setState({ ...car });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const car = { ...this.state };
    this.props.dispatch(updateCar(car));
    this.refs.alert.style = "display: block";
    setTimeout(() => {
      this.refs.alert.style = "display: none";
    }, 3000);
  }

  render() {
    const {
      name,
      type,
      img,
      motorType,
      motor,
      transmission,
      countPlaces,
      gasRate,
      rams,
      vol,
      maxSpeed,
      power,
      gas,
      shortDescr,
      fullDescr
    } = this.state;
    return (
      <div className="container body">
        <h2 className="title">Добавить авто</h2>
        <div ref="alert" className="alert alert-info" role="alert">
          Машина обновлена
        </div>
        <form autoComplete="off" ref="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-input">
                <Paper>
                  <TextField
                    name="img"
                    value={img}
                    fullWidth
                    type="url"
                    required
                    label="Image url"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="type"
                    value={type}
                    fullWidth
                    required
                    select
                    label="Type car"
                    variant="outlined"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="muscle">Маслкар</MenuItem>
                    <MenuItem value="zaz">ЗАЗ</MenuItem>
                    <MenuItem value="sport">Спорткар</MenuItem>
                  </TextField>
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="name"
                    value={name}
                    fullWidth
                    required
                    label="Car name"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="motorType"
                    value={motorType}
                    fullWidth
                    required
                    select
                    label="Тип двигателя"
                    variant="outlined"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="ДВС">ДВС</MenuItem>
                    <MenuItem value="Дизель">Дизель</MenuItem>
                  </TextField>
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="motor"
                    value={motor}
                    fullWidth
                    required
                    label="Двигатель"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="transmission"
                    value={transmission}
                    fullWidth
                    required
                    label="Трансмиссия"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="countPlaces"
                    value={countPlaces}
                    fullWidth
                    required
                    label="Кол-во мест"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="gasRate"
                    value={gasRate}
                    fullWidth
                    required
                    label="Средний расход"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="rams"
                    value={rams}
                    fullWidth
                    required
                    label="Цилиндров"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="vol"
                    value={vol}
                    fullWidth
                    required
                    label="Объем двигателя"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="maxSpeed"
                    value={maxSpeed}
                    fullWidth
                    required
                    label="Максимальная скорость"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="power"
                    value={power}
                    fullWidth
                    required
                    label="Мощность (л.с)"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="gas"
                    value={gas}
                    fullWidth
                    required
                    select
                    label="Топливо"
                    variant="outlined"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="Бензин">Бензин</MenuItem>
                    <MenuItem value="Дизель">Дизель</MenuItem>
                    <MenuItem value="Водород">Водород</MenuItem>
                    <MenuItem value="Электро">Электо</MenuItem>
                  </TextField>
                </Paper>
              </div>
            </div>
            <div className="col-6">
              <div className="form-input">
                <Paper>
                  <TextField
                    name="shortDescr"
                    value={shortDescr}
                    fullWidth
                    required
                    label="Краткое описание (макс 110 символов)"
                    variant="outlined"
                    inputProps={{ maxLength: "110" }}
                    multiline
                    rows="4"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="form-input">
                <Paper>
                  <TextField
                    name="fullDescr"
                    value={fullDescr}
                    fullWidth
                    required
                    label="Детальное описание"
                    variant="outlined"
                    multiline
                    rows="10"
                    onChange={this.handleChange}
                  />
                </Paper>
              </div>
              <div className="add-button">
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  type="submit"
                >
                  Добавить
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(UpdatePage);
