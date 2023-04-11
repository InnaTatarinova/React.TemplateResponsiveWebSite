import React from "react";
import "../../App.css";
import "./BudgetComponent.css";
import { ExpensesList } from "./ExpensesList";
import { AddNewExpence } from "./AddNewExpence";
import { BudgetProvider } from "../../context/BudgetContext";
import { Budget } from "./Budget";
import { RemainingMoney } from "./RemainingMoney";
import { TotalExpenses } from "./TotalExpenses";

export const BudgetComponent = () => {
  return (
    <BudgetProvider>
      <div>
        <h2>My Budget Planner</h2>
        <div className="budgetList">
          <Budget />
          <RemainingMoney />
          <TotalExpenses />
        </div>
        <div className="budget-expenseBlock">
          <div className="budget-expenseBlockComponent">
            <h3>Expenses</h3>
            <ExpensesList />
          </div>

          <div className="budget-expenseBlockComponent">
            <h3>Add Expense</h3>
            <div>
              <AddNewExpence />
            </div>
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
};
