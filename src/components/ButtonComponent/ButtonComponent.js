import React from "react";
import "./ButtonComponent.css";

export const ButtonComponent = ({ children, className, btnStyle, btnSize, btnForm, onClick, disabled}) => {
  const STYLES = ["btn-standart","btn-standart-black","btn-standart-blue", "btn-outline", "btn-test"];
  const SIZES = ["btn-medium", "btn-small","btn-large"];
  const FORM = ["btn-rectangle","btn-ellipse"];
  const CLASSNAME =["", "banner-btn", "footer-subscribe-btn", "btnServiceList", "searchBtn", "searchTrevelerBtn"];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  const checkBtnForm = FORM.includes(btnForm) ? btnForm : FORM[0];

  const checkBtnClassName = CLASSNAME.includes(className) ? className : CLASSNAME[0];

  return (
    
        <button
        disabled = {disabled}
        onClick={onClick}
        className={`btnMain ${checkBtnClassName} ${checkBtnStyle} ${checkBtnSize} ${checkBtnForm}`}
      >
        {children}
      </button>
     
  );
};

