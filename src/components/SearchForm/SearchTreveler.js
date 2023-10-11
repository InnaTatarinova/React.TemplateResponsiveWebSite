import React, { useContext, useState } from "react";
import { SearchCount } from "./SearchCount";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { SearchFormContext} from "../../context/SearchFormContext";

export const SearchTreveler = (props) => {
  const { dispatch } = useContext(SearchFormContext);

  const [amount, setAmount] = useState(0);

  const saveAmountTrevelers = () => {
    console.log();
    dispatch({
      type: props.type,
      payload: amount,
    });
    props.setShowCitySearchForm(false);
    setAmount(0);
  };

  return (
    <div className="search_city search-treveler-component">
      <SearchCount
        title="Adult"
        setAmount={setAmount}
        amount={amount}
      />
      <SearchCount
        title="Child (5-18)"
        setAmount={setAmount}
        amount={amount}
      />
      <SearchCount
        title="Baby/Toddler (0-4)"
        setAmount={setAmount}
        amount={amount}
      />

      <ButtonComponent
        onClick={saveAmountTrevelers}
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
