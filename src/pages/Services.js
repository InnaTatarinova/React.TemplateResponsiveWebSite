import React from "react";
import { BannerForPages } from '../components/BannerForPages/BannerForPages';
import service_banner from "../assets/img/service_banner.jpg";
import "../App.css";

export const Services = () => {
  return (
    <div>
      <BannerForPages
        img={service_banner}
        alt="service banner"
        text="We will prepare everything YOU may need"
      />
      <div className='mainPageInfo'>Main Info about our SERVICE</div>
    </div>
  );
};
