import React, { useContext, useState } from "react";
import { SearchComponent } from "../SearchForm/SearchComponent";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { SearchFormContext } from "../../context/SearchFormContext";

export const CarSearchForm = () => {
    const { cityNameFrom, cityNameFromCoord, dateIn, dateOut, treveler, data, wasSetData, dispatch } =
    useContext(SearchFormContext);
  
  
  
  const [wasNotChooseCity, setWasNotChooseCity] = useState(false);
  const [wasNotChooseDateIn, setWasNotChooseDateIn] = useState(false);
  const [wasNotChooseDateOut, setWasNotChooseDateOut] = useState(false);
  
  const check = () => {
    if (cityNameFrom !== "" && dateIn !== "" && dateOut !== "") {
      return true;
    } else {
      if (cityNameFrom === "") {
        setWasNotChooseCity(true);
      }
      if (dateIn === "") {
        setWasNotChooseDateIn(true);
      }
      if (dateOut === "") {
        setWasNotChooseDateOut(true);
      }
      return false;
    }
  };
  return (
      <div className="search-component">
        <SearchComponent
          title="City pick-up"
          classNameBtn="search search-input search-input-city"
          classNameI="bi bi-geo-alt-fill search-icon"
          state="cityNameFrom"
          cityNameFrom={cityNameFrom}
          wasNotChoose={wasNotChooseCity}
          setWasNotChoose={setWasNotChooseCity}
          alert="Please choose City"
        />

        <SearchComponent
          title="City drop-off"
          classNameBtn="search search-input search-input-city"
          classNameI="bi bi-geo-alt-fill search-icon"
          state="cityNameTo"
          cityNameFrom={cityNameFrom}
          wasNotChoose={wasNotChooseCity}
          setWasNotChoose={setWasNotChooseCity}
          alert="Please choose City"
        />

        <SearchComponent
          title="Date pick-up"
          classNameBtn="search"
          classNameI="bi bi-calendar3 search-icon"
          state="dateIn"
          dateIn={dateIn}
          dateOut={dateOut}
          wasNotChoose={wasNotChooseDateIn}
          setWasNotChoose={setWasNotChooseDateIn}
          alert="Please choose Date-in"
        />
        <SearchComponent
          title="Date drop-off"
          classNameBtn="search"
          classNameI="bi bi-calendar3 search-icon"
          state="dateOut"
          dateIn={dateIn}
          dateOut={dateOut}
          wasNotChoose={wasNotChooseDateOut}
          setWasNotChoose={setWasNotChooseDateOut}
          alert="Please choose Date-out"
        />

        <SearchComponent
          title="Time pick-up"
          classNameBtn="search"
          classNameI="bi bi-clock search-icon"
          state="pickUp"
        />
        <SearchComponent
          title="Time drop-off"
          classNameBtn="search"
          classNameI="bi bi-clock search-icon"
          state="dropOff"
        />

        <ButtonComponent
          className="searchBtn"
          btnStyle="btn-standart-black"
          btnSize="btn-large"
          btnForm="btn-ellipse"
          type="submit"
        >
          Search
        </ButtonComponent>
      </div>
   
  );
};