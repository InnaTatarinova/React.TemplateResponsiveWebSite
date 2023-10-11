import React from "react";

export const PageComponent = (props) => {
  return (
    <div>
      <h2> {props.name}</h2>
      {props.component}
     
    </div>
  );
};
