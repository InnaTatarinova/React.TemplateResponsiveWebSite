import React, { useEffect, useState } from "react";
import product_banner from "../assets/img/product_banner.jpg";
import { BannerForPages } from "../components/BannerForPages/BannerForPages";
import "../App.css";
import { Castles } from "../components/ProductComponent/Castles";
import { PageComponent } from "../components/PageComponent/PageComponent";
import { Mountaines } from "../components/ProductComponent/Mountaines";
import { Cities } from "../components/ProductComponent/Cities";
import { Jungle } from "../components/ProductComponent/Jungle";
import { Beaches } from "../components/ProductComponent/Beaches";

export const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);


  const ProductType = {
    Castles: 0,
    Mountains: 1,
    Beaches: 2,
    Cities: 3,
    Jungle: 4,
  };

  const [selectedProduct, setSelectedProduct] = useState(ProductType.Castles);

  const chooseProductType = (e) => {
    switch (e.target.innerHTML) {
      case "Castles":
        setSelectedProduct(ProductType.Castles);
        break;
      case "Mountains":
        setSelectedProduct(ProductType.Mountains);
        break;
      case "Beaches":
        setSelectedProduct(ProductType.Beaches);
        break;
      case "Cities":
        setSelectedProduct(ProductType.Cities);
        break;
      case "Jungle":
        setSelectedProduct(ProductType.Jungle);
        break;
      default:
        setSelectedProduct(ProductType.Castles);
    }
  };

  return (
    <div>
      <BannerForPages
        img={product_banner}
        alt="product banner"
        text="Our trips can be yours, just choose your dream!"
        btnClick={chooseProductType}
        btnArray={["Castles", "Mountains", "Beaches", "Cities", "Jungle"]}
      />
      <div className="mainPageInfo">
        {selectedProduct === ProductType.Castles ? (
          <div>
            <PageComponent component={<Castles />} />
          </div>
        ) 
        : selectedProduct === ProductType.Beaches ? (
          <div>
            <PageComponent name="Beaches" component={<Beaches/>} />
          </div>
        ) : selectedProduct === ProductType.Cities ? (
          <div>
            <PageComponent name="Cities" component={<Cities />} />
          </div>
        ) : selectedProduct === ProductType.Mountains ? (
          <div>
            <PageComponent name="Mountain" component={<Mountaines />} />
          </div>
        ) : selectedProduct === ProductType.Jungle ? (
          <div>
            <PageComponent name="Jungle" component={<Jungle />} />
          </div>
        )
        : null
         }
      </div>
    </div>
  );
};
