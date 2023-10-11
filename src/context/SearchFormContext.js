import React, { createContext, useReducer } from "react";

const SearchFormReducer = (state, action) => {
  switch (action.type) {
    case "CHOOSE_CITY_FROM":
      return {
        ...state,
        cityNameFrom: action.payload,
      };
      case "CHOOSE_CITY_FROM_COORD":
      return {
        ...state,
        cityNameFromCoord: action.payload,
      };
      case "CHOOSE_CITY_TO":
      return {
        ...state,
        cityNameTo: action.payload,
      };
    case "CHOOSE_DATE_IN":
      return {
        ...state,
        dateIn: action.payload,
      };
    case "CHOOSE_DATE_OUT":
      return {
        ...state,
        dateOut: action.payload,
      };
      case "CHOOSE_PICK_UP":
      return {
        ...state,
        pickUp: action.payload,
      };
    case "CHOOSE_DROP_OFF":
      return {
        ...state,
        dropOff: action.payload,
      };
    case "CHOOSE_TREVELER":
      return {
        ...state,
        treveler: action.payload,
      };
    case "CHOOSE_ROOM":
      return {
        ...state,
        room: action.payload,
      };
      case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
      case "WAS_SET_DATA":
      return {
        ...state,
        wasSetData: action.payload,
      };
    default:
      return state;
  }
};

const initialSearchFormState = {
  cityNameFrom: "",
  cityNameFromCoord:"",
  cityNameTo:"",
  dateIn: "",
  dateOut: "",
  treveler: 1,
  room: 1,
  pickUp: "",
  dropOff: "",
  data:[],
  wasSetData: false,

};

export const SearchFormContext = createContext();

export const SearchFormProvider = (props) => {
  const [state, dispatch] = useReducer(
    SearchFormReducer, initialSearchFormState
  );
  return (
    <SearchFormContext.Provider
      value={{
        cityNameFrom: state.cityNameFrom,
        cityNameFromCoord: state.cityNameFromCoord,
        cityNameTo: state.cityNameTo,
        dateIn: state.dateIn,
        dateOut: state.dateOut,
        treveler: state.treveler,
        room: state.room,
        pickUp: state.pickUp,
        dropOff: state.dropOff,
        data:state.data,
        wasSetData:state.wasSetData,
        dispatch,
      }}
    >
      {props.children}
    </SearchFormContext.Provider>
  );
};
