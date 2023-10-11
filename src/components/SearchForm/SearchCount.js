import React, {useState } from "react";

export const SearchCount = (props) => {

  const [value, setValue] = useState(props.amount);


  const increaseValue = () => {
    setValue(value + 1);
    props.setAmount(props.amount+1);
    
  };

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
      props.setAmount(props.amount-1);
    }
  };

  return (
    <div className="search-treveler">
      <span className="search-treveler-category">{props.title}</span>
      <i onClick={decreaseValue} className="bi bi-dash-circle moveBi"></i>
      <span className="search-treveler-quantity">{value}</span>
      <i onClick={increaseValue} className="bi bi-plus-circle moveBi"></i>

    </div>
  );
};
