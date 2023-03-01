import React from "react";
import { Link } from "react-router-dom";
import "./ButtonComponent.css";

const ButtonComponent = ({ children, btnStyle, btnSize, onClick, path}) => {
  const STYLES = ["btn-standart", "btn-outline", "btn-test"];
  const SIZES = ["btn-medium", "btn-large"];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    
   <Link to ={path}>
      <button
        onClick={onClick}
        className={`btn ${checkBtnStyle} ${checkBtnSize}`}
      >
        {children}
      </button>
   </Link>
    
  );
};

export default ButtonComponent;
