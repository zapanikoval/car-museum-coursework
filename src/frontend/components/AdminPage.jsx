import React from "react";
import { addCar, updateCar, deleteCar } from "../utils/carsActions/actionsCars";
import CarDetailCard from "./CarDetailCard";
import "../styles/AdminPage.scss";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cars } = this.props;
    return (
      <>
        <div className="container body">
          <div className="add-button">
            <Button color="primary" variant="contained">
              <NavLink to="/add" className="link">
                <AddIcon />
                Добавить авто
              </NavLink>
            </Button>
          </div>
          <div className="cards row">
            {cars.map(car => (
              <CarDetailCard
                name={car.name}
                img={car.img}
                description={car.shortDescr}
                key={car._id}
                car={car}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default AdminPage;
