import React, { useContext} from "react";
import { BudgetContext } from "../../context/BudgetContext";
import { MainViewBudgetComponent } from "./MainViewBudgetComponent";

export const Budget = () => {
  const { budget } = useContext(BudgetContext);
 
  return (
    <>
      <MainViewBudgetComponent
        name={`Budget: $${budget}`}
        background="lightgray"
        fontColor="darkslategray"
        btn="Edit"
      />
    </>
  );
};
