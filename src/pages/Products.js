import React from "react";
import product_banner from "../assets/img/product_banner.jpg";
import { BannerForPages } from "../components/BannerForPages/BannerForPages";
import "../App.css";

export const Products = () => {
  return (
    <div>
      <BannerForPages
        img={product_banner}
        alt="product banner"
        text="Our trips can be yours, just choose your dream!"
      />
      <div className="mainPageInfo">Main Info about our PRODUCTS</div>
    </div>
  );
};
