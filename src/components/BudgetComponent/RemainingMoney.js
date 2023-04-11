import React, { useContext } from "react";
import { MainViewBudgetComponent } from "./MainViewBudgetComponent";
import { BudgetContext } from "../../context/BudgetContext";

export const RemainingMoney = () => {
  const { budget, expenses } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

 
  const alertSpendBackground = (totalExpenses > budget) ? "coral" : "lightgreen";
  const alertSpendColor = (totalExpenses > budget) ? "red" : "darkgreen";
 


  return (
    <>
      <MainViewBudgetComponent
        name={`Remaining: $${budget-totalExpenses}`}
        background= {alertSpendBackground}
        fontColor={alertSpendColor}
      />
    </>
  );
};
