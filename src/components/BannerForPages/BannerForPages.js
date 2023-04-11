import React from "react";
import "./BannerForPages.css";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

export const BannerForPages = (props) => {
  return (
    <div className="pageBanner">
      <img src={props.img} alt={props.alt} className="pageBanner-img"></img>
      <div className="pageName">
        <h1>{props.text}</h1>
      </div>
      <div className="btn-list">
        {[...props.btnArray].map((x, i) => (
          <ButtonComponent
            key={i}
            className="btnServiceList"
            btnStyle="btn-outline"
            btnSize="btn-large"
            onClick={props.btnClick}
          >
            {x}
          </ButtonComponent>
        ))}
      </div>
    </div>
  );
};
