import React from "react";
import { NavLink } from "react-router-dom";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import logo from "../images/logo.png";
import "../styles/Header.scss";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  return (
    <>
      <div className="background-header">
        <div>
          <img className="logo" src={logo} alt="Logo"></img>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-red">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main" activeClassName="active">
                <DriveEtaIcon />
                &nbsp; Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/zaz" activeClassName="active">
                <DriveEtaIcon />
                &nbsp; ЗАЗ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/sport"
                activeClassName="active"
              >
                <DriveEtaIcon />
                &nbsp; Спорткары
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/muscle"
                activeClassName="active"
              >
                <DriveEtaIcon />
                &nbsp; Масклкары
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
