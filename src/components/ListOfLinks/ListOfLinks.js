import React from "react";
import { Link } from "react-router-dom";
import "./ListOfLinks.css"


export const ListOfLinks = (props) => {
  return (
    <>
      <div className="listOfLink-container">
        <h2>{props.title}</h2>
        <Link to={props.link}>{props.listofTheme[0]}
        {(props.icon !== undefined) ? <i className={props.icon[0]}></i> : null}
        </Link>
        <Link to={props.link}>{props.listofTheme[1]}
        {(props.icon !== undefined) ? <i className={props.icon[1]}></i> : null}</Link>
        <Link to={props.link}>{props.listofTheme[2]}
        {(props.icon !== undefined) ? <i className={props.icon[2]}></i> : null}</Link>
        <Link to={props.link}>{props.listofTheme[3]}
        {(props.icon !== undefined) ? <i className={props.icon[3]}></i> : null}</Link>
      </div>
    </>
  );
};
