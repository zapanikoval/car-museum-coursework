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
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3000">
            <img src={zaz} className="d-block w-100" alt="zaz" />
          </div>
          <div className="carousel-item" data-interval="3000">
            <img src={nissan} className="d-block w-100" alt="nissan" />
          </div>
          <div className="carousel-item" data-interval="3000">
            <img src={mustang} className="d-block w-100" alt="mustang" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

