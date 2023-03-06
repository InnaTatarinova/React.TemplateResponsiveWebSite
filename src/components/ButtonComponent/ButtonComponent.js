import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({ children, btnStyle, btnSize, btnForm, onClick}) => {
  const STYLES = ["btn-standart","btn-standart-black", "btn-outline", "btn-test"];
  const SIZES = ["btn-medium", "btn-large"];
  const FORM = ["btn-rectangle","btn-ellipse"];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  const checkBtnForm = FORM.includes(btnForm) ? btnForm : FORM[0];



  return (
    
        <button
        onClick={onClick}
        className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnForm}`}
      >
        {children}
      </button>
     
  );
};

export default ButtonComponent;
