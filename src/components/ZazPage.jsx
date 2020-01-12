import React from "react";
import CarCard from "./CarCard";
import "../styles/ZazPage.scss";
import { connect } from "react-redux";

class ZazPage extends React.Component {
  
  render() {
    const { cars } = this.props;
    return (
      <div className="container body">
        <h1>Музей автомобилей ЗАЗ!</h1>
        <p>
          Quidem necessitatibus autem aut tempore esse saepe ratione. Voluptatum
          voluptas ut laborum natus eaque optio. Ex et cumque animi vel dolorem.
          Omnis fugit velit deserunt. Voluptatem porro animi ut ea eos nihil
          dolores. Id iure voluptatem deleniti perspiciatis ullam vel alias est.
          Ea itaque sed ea maiores mollitia non quo. Sed eveniet possimus
          quisquam voluptatem rem omnis qui non. Aliquid odio ipsa quos
          dignissimos iure culpa delectus doloremque qui. Ipsa expedita in sunt
          voluptas velit doloribus. Praesentium illo eligendi est rerum
          voluptates sequi. Nemo voluptatem possimus consequuntur ducimus. Dicta
          aut tempore alias et et ducimus reiciendis a consectetur. Velit illo
          neque sunt quia.
        </p>
        <div className="cards row">
          {cars.map(car => {
            if (car !== undefined)
              return (
                <CarCard
                  img={car.img}
                  name={car.name}
                  description={car.shortDescr}
                  id={car}
                  car={car}
                />
              );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const cars = state.map(car => {
    if (car.type === "zaz") return car;
  });
  return {
    cars
  };
};

export default connect(mapStateToProps)(ZazPage);
