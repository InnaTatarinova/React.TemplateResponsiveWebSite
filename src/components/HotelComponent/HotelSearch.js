import React from "react";
import { SearchFormProvider } from "../../context/SearchFormContext";
import { HotelSearchForm } from "./HotelSearchForm";

export const HotelSearch = () => {
  return (
    <SearchFormProvider>
      <HotelSearchForm />
    </SearchFormProvider>
  );
};
