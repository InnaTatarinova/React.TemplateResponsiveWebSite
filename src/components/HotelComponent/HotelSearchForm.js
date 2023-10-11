import React, { useContext, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { SearchComponent } from "../SearchForm/SearchComponent";
import { SearchFormContext } from "../../context/SearchFormContext";
import "../SearchForm/SearchFormComponent.css";
import { ResultHotelSearch } from "./ResultHotelSearch";

export const HotelSearchForm = () => {
  const { cityNameFrom, cityNameFromCoord, dateIn, dateOut, treveler, room, data, wasSetData, dispatch } =
    useContext(SearchFormContext);

  

  const [wasNotChooseCity, setWasNotChooseCity] = useState(false);
  const [wasNotChooseDateIn, setWasNotChooseDateIn] = useState(false);
  const [wasNotChooseDateOut, setWasNotChooseDateOut] = useState(false);


  // const [data, setData] = useState([]);
  // const [wasSetData, setDataWasSet] = useState(false);

  const [wasClickedSearchBtn, setWasClickedSearchBtn] = useState(false);


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

  const request = `http://engine.hotellook.com/api/v2/lookup.json?query=${cityNameFromCoord}&lang=en&lookFor=hotel&limit=10`;

  const getInfo = async () => {
    const response = await fetch(request);
    const result = await response.json();

    dispatch({
      type:"SET_DATA",
      payload: result
    });

    dispatch({
      type:"WAS_SET_DATA",
      payload: true
    });

    // setDataWasSet(!wasSetData);
    setWasClickedSearchBtn(false);
  };

  const searchHotel = () => {
   // setDataWasSet(false);
    if (check() === true) {
      console.log("Hurray!!!!!!");
      setWasClickedSearchBtn(true);
      getInfo();
    }
  };

  return (
    <>
      <div className="search-component">
        <SearchComponent
          title="City"
          classNameBtn="search search-input"
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

        <SearchComponent
          title="Room:"
          classNameBtn="search"
          classNameI="bi bi-house search-icon"
          state="room"
          room={room}
        />

        <ButtonComponent
          className="searchBtn"
          btnStyle="btn-standart-black"
          btnSize="btn-large"
          btnForm="btn-ellipse"
          type="submit"
          onClick={searchHotel}
          disabled={wasClickedSearchBtn}
        >
          <span style={wasClickedSearchBtn === true ? { marginRight: "20px" } : null}>
            Search
          </span>
          {wasClickedSearchBtn === true ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
        </ButtonComponent>
      </div>
      {wasSetData === true ? ( 
        <ResultHotelSearch data={data} setWasClickedSearchBtn={setWasClickedSearchBtn} cityNameFrom={cityNameFrom}/>
      ) : null}
    </>
  );
};
