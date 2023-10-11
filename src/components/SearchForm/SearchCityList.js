import React, { useContext, useState } from "react";
import { SearchFormContext } from "../../context/SearchFormContext";

export const SearchCityList = (props) => {
  const { dispatch } = useContext(SearchFormContext);
  const [searchInput, saveSearchInput] = useState("");
  

  const handleSearchInput = (e) => {
    saveSearchInput(e.target.value);
  };

  const chooseName = (e, lon, lat) => {
    dispatch({
      type: props.type1,
      payload: e.target.innerHTML,
    });
    dispatch({
      type: props.type2,
      payload: lat+","+lon,
    });

    dispatch({
      type:"SET_DATA",
      payload: []
    });

    dispatch({
      type:"WAS_SET_DATA",
      payload: false
    });

    props.setShowCitySearchForm(false);
    saveSearchInput("");
    props.setWasNotChoose(false);
  };

  return (
    <div className="search_city">
      <input
        onChange={handleSearchInput}
        className="search_city_input"
        placeholder="City..."
      ></input>
      <hr></hr>
      <div className="search_city_result">
        <ul className="cityNameList">
            {searchInput === ""
            ? null
            : props.data
                .filter((value) => {
                  if (
                    value.city
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  ) {
                    return value;
                  }
                  return "";
                })
                .map((value, key) => {
                  return (
                    <li onClick= {(event) => chooseName(event, value.location.lon, value.location.lat)} key={key}>
                      {value.city}, {value.country}
                    </li>
                  );
                })}
        </ul>
      </div>
    </div>
  );
};
