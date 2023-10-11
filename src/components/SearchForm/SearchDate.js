import React, { useContext } from "react";
import { SearchFormContext } from "../../context/SearchFormContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const SearchDate = (props) => {
  const { dispatch } = useContext(SearchFormContext);

  const today = new Date();
  const nextDay = props.dateIn;

  const chooseDate = (e) => {
    dispatch({
      type: props.type,
      payload: e,
    });

    if (props.name === "in" && props.dateOut !== "" && e >= props.dateOut) {
      dispatch({
        type: props.typeOut,
        payload: "",
      });
    };
    dispatch({
      type:"SET_DATA",
      payload: []
    });

    dispatch({
      type:"WAS_SET_DATA",
      payload: false
    });
    props.setShowCitySearchForm(false);
    props.setWasNotChoose(false);
  };

  return (
    <div className="searchDate-calendar">
      <Calendar
        onChange={chooseDate}
        minDate={
          props.name === "out"
            ? props.dateIn === ""
              ? today
              : new Date(nextDay.setDate(nextDay.getDate()))
            : today
        }
      />
    </div>
  );
};
