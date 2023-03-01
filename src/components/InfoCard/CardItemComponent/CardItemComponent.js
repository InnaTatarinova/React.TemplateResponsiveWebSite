import React from "react";
import { Link } from "react-router-dom";

export const CardItemComponent = (props) => {
  return (
    <>
      <li className="cardItem-conteiner">
        <Link to={props.path} className="cardItem-link">
          <figure data-category={props.label} className="cardItem-pic">
            <img className="cardItem-img" src={props.img} alt={props.alt} />
          </figure>
          <div className="cardItem-text-conteiner">
            <h5 className="cardItem-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
