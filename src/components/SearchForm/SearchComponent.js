import React, { useState } from "react";
import cities from "../../data/MOCK_DATA_CITY.json";
import { SearchCityList } from "./SearchCityList";
import { SearchDate } from "./SearchDate";
import { SearchTreveler } from "./SearchTreveler";
import { SearchQuantityRoom } from "./SearchQuantityRoom";
import { SearchTime } from "./SearchTime";

export const SearchComponent = (props) => {
  const [showCitySearchForm, setShowCitySearchForm] = useState(false);

  const clickOnCitySearchForm = () => {
    setShowCitySearchForm(!showCitySearchForm);
  };

  const renderSwitchSearchHotelComponent = () => {
    switch (props.state) {
      case "cityNameFrom":
        return (
          <SearchCityList
            data={cities}
            setShowCitySearchForm={setShowCitySearchForm}
            type1="CHOOSE_CITY_FROM"
            type2="CHOOSE_CITY_FROM_COORD"
            setWasNotChoose={props.setWasNotChoose}
          />
        );
      case "cityNameTo":
        return (
          <SearchCityList
            data={cities}
            setShowCitySearchForm={setShowCitySearchForm}
            type1="CHOOSE_CITY_TO"
            type2="CHOOSE_CITY_TO_COORD"
            setWasNotChoose={props.setWasNotChoose}
          />
        );
      case "dateIn":
        return (
          <SearchDate
            setShowCitySearchForm={setShowCitySearchForm}
            type="CHOOSE_DATE_IN"
            typeOut="CHOOSE_DATE_OUT"
            name="in"
            dateOut={props.dateOut}
            setWasNotChoose={props.setWasNotChoose}
          />
        );
      case "dateOut":
        return (
          <SearchDate
            setShowCitySearchForm={setShowCitySearchForm}
            type="CHOOSE_DATE_OUT"
            name="out"
            dateIn={props.dateIn}
            setWasNotChoose={props.setWasNotChoose}
          />
        );
      case "pickUp":
        return (
          <SearchTime
            setShowCitySearchForm={setShowCitySearchForm}
            type="CHOOSE_PICK_UP"
            className={props.classNameBtn}
            setWasNotChoose={props.setWasNotChoose}
          />
        );
      case "dropOff":
        return (
          <SearchTime
            setShowCitySearchForm={setShowCitySearchForm}
            type="CHOOSE_DROP_OFF"
            className={props.classNameBtn}
            setWasNotChoose={props.setWasNotChoose}
          />
        );
      case "treveler":
        return (
          <SearchTreveler
            setShowCitySearchForm={setShowCitySearchForm}
            type="CHOOSE_TREVELER"
          />
        );
      case "room":
        return (
          <SearchQuantityRoom
            setShowCitySearchForm={setShowCitySearchForm}
            type="CHOOSE_ROOM"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {!showCitySearchForm ? (
        <button
          className={props.classNameBtn}
          onClick={clickOnCitySearchForm}
          style={
            props.wasNotChoose === true
              ? { borderColor: "red" }
              : { borderColor: "black" }
          }
        >
          <i className={props.classNameI}></i>
          <span
            style={
              props.wasNotChoose === true
                ? { color: "red" }
                : { color: "black" }
            }
          >
            {props.wasNotChoose === true
              ? props.alert
              : props.state === "cityNameFrom"
              ? props.cityNameFrom === ""
                ? props.title
                : props.cityNameFrom
              : props.state === "cityNameTo"
              ? props.cityNameTo === ""
                ? props.title
                : props.cityNameTo
              : props.state === "dateIn"
              ? props.dateIn === ""
                ? props.title
                : props.dateIn.toDateString()
              : props.state === "dateOut"
              ? props.dateOut === ""
                ? props.title
                : props.dateOut.toDateString()
              : props.state === "pickUp"
              ? props.pickUp === ""
                ? props.title
                : props.pickUp
              : props.state === "dropOff"
              ? props.dropOff === ""
                ? props.title
                : props.dropOff
              : props.state === "treveler"
              ? props.treveler === "1"
                ? "Treveler: " + props.treveler
                : "Trevelers: " + props.treveler
              : props.state === "room"
              ? props.room === "1"
                ? "Room: " + props.room
                : "Rooms: " + props.room
              : null}
          </span>
        </button>
      ) : (
        <>{renderSwitchSearchHotelComponent()}</>
      )}
    </>
  );
};

