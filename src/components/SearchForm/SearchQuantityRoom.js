import React, { useContext, useState } from "react";
import { SearchFormContext } from "../../context/SearchFormContext";
import { SearchCount } from "./SearchCount";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const SearchQuantityRoom = (props) => {
  const { dispatch } = useContext(SearchFormContext);
  const [amount, setAmount] = useState(1);

  const saveRoom = () => {
    console.log();
    dispatch({
      type: props.type,
      payload: amount,
    });
    props.setShowCitySearchForm(false);
    setAmount(1);
  };

  return (
      <div className="search_city search-treveler-component">
        <SearchCount
          title="Room"
          setAmount={setAmount}
          amount={amount}
        />

        <ButtonComponent
          onClick={saveRoom}
          className="searchTrevelerBtn"
          btnStyle="btn-standart-black"
          btnSize="btn-small"
          btnForm="btn-ellipse"
          type="submit"
        >
          Done
        </ButtonComponent>
      </div>
    
  );
};
