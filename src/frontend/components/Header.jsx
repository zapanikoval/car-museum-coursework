import React from "react";
import { NavLink } from "react-router-dom";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.png";
import "../styles/Header.scss";
import "bootstrap/dist/css/bootstrap.css";
import { withStyles } from "@material-ui/core";

const SignButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#580909",
    "&:hover": {
      backgroundColor: "#400606"
    },
    fontFamily: ['"Fira Sans Extra Condensed"', "sans-serif"].join(",")
  }
}))(Button);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.props.logOut();
    }, 2000);
  }

  render() {
    return (
      <>
        <div className="background-header">
          <div className="logo-div">
            <img className="logo" src={logo} alt="Logo"></img>
            {!this.props.auth ? (
              <div className="sign-button">
                <SignButton size="large">
                  <NavLink to="/signin" className="link">
                    Войти
                  </NavLink>
                </SignButton>
              </div>
            ) : (
              <div className="signout-button">
                <h5 className="h5">Вы вошли в систему</h5>
                <div className="spinner-block">
                  {this.state.loading && (
                    <div className="spinner-border m-2" role="status"></div>
                  )}
                  <SignButton size="large" onClick={this.handleClick}>
                    Выйти
                  </SignButton>
                </div>
              </div>
            )}
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
                <NavLink
                  className="nav-link"
                  to="/main"
                  activeClassName="active"
                >
                  <DriveEtaIcon />
                  &nbsp; Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/zaz"
                  activeClassName="active"
                >
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
              {this.props.auth && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/admin"
                    activeClassName="active"
                  >
                    <SettingsIcon />
                    &nbsp; Редактировать
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
