import React, { useContext } from "react";
import { MainViewBudgetComponent } from "./MainViewBudgetComponent";
import { BudgetContext } from "../../context/BudgetContext";

export const TotalExpenses = () => {
  const { expenses } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <>
      <MainViewBudgetComponent
        name= {`Total expenses: $${totalExpenses}`}
        background="lightblue"
        fontColor="darkblue"
      />
    </>
  );
};
