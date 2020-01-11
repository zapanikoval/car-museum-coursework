import React from "react";
import CarCard from "./CarCard";
import "../styles/ZazPage.scss";

import zaz from "../images/zaz.jpg";

export default class ZazPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <CarCard
            img={zaz}
            name="Запорожец"
            description="Чудесная машина можно на ней ездить"
          />
          <CarCard
            img={zaz}
            name="Запорожец"
            description="Чудесная машина можно на ней ездить"
          />
          <CarCard
            img={zaz}
            name="Запорожец"
            description="Чудесная машина можно на ней ездить"
          />
          <CarCard
            img={zaz}
            name="Запорожец"
            description="Чудесная машина можно на ней ездить"
          />
          <CarCard
            img={zaz}
            name="Запорожец"
            description="Чудесная машина можно на ней ездить"
          />
        </div>
      </div>
    );
  }
}
