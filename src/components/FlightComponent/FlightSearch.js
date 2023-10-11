import React from "react";
import { SearchFormProvider } from "../../context/SearchFormContext";
import { FlightSearchHotel } from "./FlightSearchHotel";

export const FlightSearch = () => {
  return (
    <SearchFormProvider>
      <FlightSearchHotel />
    </SearchFormProvider>
  );
};
