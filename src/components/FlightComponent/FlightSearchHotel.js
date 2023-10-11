import React, { useContext, useState } from "react";
import { SearchComponent } from "../SearchForm/SearchComponent";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { SearchFormContext } from "../../context/SearchFormContext";


export const FlightSearchHotel = () => {
  const { cityNameFrom, dateIn, dateOut, treveler} =
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
          title="Leaving from"
          classNameBtn="search search-input search-input-city"
          classNameI="bi bi-geo-alt-fill search-icon"
          state="cityNameFrom"
          cityNameFrom={cityNameFrom}
          wasNotChoose={wasNotChooseCity}
          setWasNotChoose={setWasNotChooseCity}
          alert="Please choose City"
        />

        <SearchComponent
          title="Going to"
          classNameBtn="search search-input search-input-city"
          classNameI="bi bi-geo-alt-fill search-icon"
          state="cityNameFrom"
          cityNameFrom={cityNameFrom}
          wasNotChoose={wasNotChooseCity}
          setWasNotChoose={setWasNotChooseCity}
          alert="Please choose City"
          />

        <SearchComponent
          title="Date-in"
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
          title="Date-out"
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
          title="Treveler:"
          classNameBtn="search"
          classNameI="bi bi-person search-icon"
          state="treveler"
          treveler={treveler}
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
  )
};
