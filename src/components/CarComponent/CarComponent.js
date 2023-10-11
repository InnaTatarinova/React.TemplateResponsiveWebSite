import React from "react";
import { SearchFormProvider } from "../../context/SearchFormContext";
import { CarSearchForm } from "./CarSearchForm";

export const CarComponent = () => {
  return (
    <SearchFormProvider>
      <CarSearchForm/>
    </SearchFormProvider>
  );
};
