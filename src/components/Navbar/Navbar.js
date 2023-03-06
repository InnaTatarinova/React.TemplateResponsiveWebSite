import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Navbar.css";

const logo = require("../../assets/logo.jpg");

const Navbar = () => {
  const [clickOnMenuStatus, setclickOnMenuStatus] = useState(false);
  const [button, setShowButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  const clickOnMenu = () => {
    setclickOnMenuStatus(!clickOnMenuStatus);
  };

  const clickToCloseMenu = () => {
    setclickOnMenuStatus(false);
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <div>
      <div className="nav-block">
        <Link to="/" className="nav-logo">
          <p>Go abroad</p>
          <img src={logo} alt="logo" className="nav-img" />
        </Link>

        <div onClick={clickOnMenu} className="menuBtn">
          <i className={clickOnMenuStatus ? "bi bi-x-lg" : "bi bi-list"}></i>
        </div>
        <ul className={clickOnMenuStatus ? "nav-menu active" : "nav-menu"}>
          <li className="nav-menu-li">
            <Link to="/" onClick={clickToCloseMenu} className="nav-menu-item">
              Home
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link
              to="/services"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Service
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link
              to="/products"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              onClick={clickToCloseMenu}
              className="nav-links-mobile"
            >
              Sign up
            </Link>
          </li>
        </ul>

        {button && (
          <Link to="/sign-up">
            <ButtonComponent btnStyle="btn-outline" path="/sign-up">
              SIGN UP
            </ButtonComponent>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
