import React from "react";
import "../styles/Main.scss";
import zaz from "../images/zaz.jpg";
import nissan from "../images/nissan.jpg";
import mustang from "../images/mustang.jpg";

export default function Main(props) {
  return (
    <div className="container body">
      <h1>Добро пожаловать в музей авто!</h1>
      <p>
        Quia a mollitia inventore ratione officiis eos. Aut consequatur autem
        facilis architecto. Qui ipsum eligendi rem et est voluptatibus ab
        tempora sequi. Quis magni officia. Nihil eum et officia aut. Voluptatem
        quod minima exercitationem beatae. Est ut velit deleniti tenetur. Vel
        tempore odio voluptate fugiat sequi deleniti dignissimos. Ut dolorem
        vel. Repellendus distinctio quo. Cupiditate quae consequuntur nihil
        explicabo molestiae id eum ut consequatur. Beatae dolorum ducimus harum
        et animi quia cum qui. Illo ducimus aut quam.Quia a mollitia inventore
        ratione officiis eos. Aut consequatur autem facilis architecto. Qui
        ipsum eligendi rem et est voluptatibus ab tempora sequi. Quis magni
        officia. Nihil eum et officia aut. Voluptatem quod minima exercitationem
        beatae. Est ut velit deleniti tenetur. Vel tempore odio voluptate fugiat
        sequi deleniti dignissimos. Ut dolorem vel. Repellendus distinctio quo.
        Cupiditate quae consequuntur nihil explicabo molestiae id eum ut
        consequatur. Beatae dolorum ducimus harum et animi quia cum qui. Illo
        ducimus aut quam.Quia a mollitia inventore ratione officiis eos. Aut
        consequatur autem facilis architecto. Qui ipsum eligendi rem et est
        voluptatibus ab tempora sequi. Quis magni officia. Nihil eum et officia
        aut. Voluptatem quod minima exercitationem beatae. Est ut velit deleniti
        tenetur. Vel tempore odio voluptate fugiat sequi deleniti dignissimos.
        Ut dolorem vel. Repellendus distinctio quo. Cupiditate quae consequuntur
        nihil explicabo molestiae id eum ut consequatur. Beatae dolorum ducimus
        harum et animi quia cum qui. Illo ducimus aut quam.
      </p>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="4000">
            <img src={zaz} class="d-block w-100" alt="zaz" />
          </div>
          <div class="carousel-item" data-interval="4000">
            <img src={nissan} class="d-block w-100" alt="nissan" />
          </div>
          <div class="carousel-item" data-interval="4000">
            <img src={mustang} class="d-block w-100" alt="mustang" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
