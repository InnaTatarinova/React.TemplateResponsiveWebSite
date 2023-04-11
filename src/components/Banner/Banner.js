import React, { useEffect, useState } from "react";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import "./Banner.css";
import banner1 from "../../assets/img/banner_1.jpg";
import banner2 from "../../assets/img/banner_2.jpg";
import banner3 from "../../assets/img/banner_3.jpg";
import banner4 from "../../assets/img/banner_4.jpg";
import banner5 from "../../assets/img/banner_5.jpg";
import banner6 from "../../assets/img/banner_6.jpg";
import banner7 from "../../assets/img/banner_7.jpg";
import { Link } from "react-router-dom";

const imageList = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
];

export const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (imageIndex === imageList.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalTime);
  }, [imageIndex]);

  return (
    <div>
      <div className="banner-container">
        <img
          className="banner-img"
          src={imageList[imageIndex]}
          alt="nature view"
        />
        <h1 className="banner-h1">Trip is waiting you...</h1>
        <p className="banner-p"> But WHAT are YOU waiting for?</p>
        <div className="banner-btn-conteiner">
          <Link to="/products">
            <ButtonComponent
              className="banner-btn"
              btnStyle="btn-outline"
              btnSize="btn-large"
            >
              GET STARTED
            </ButtonComponent>
          </Link>
          <Link to="/services">
            <ButtonComponent
              className="banner-btn"
              btnStyle="btn-standart"
              btnSize="btn-large"
            >
              WATCH TRAILER
              <i className="bi bi-play-circle-fill" path="/"></i>
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
};
