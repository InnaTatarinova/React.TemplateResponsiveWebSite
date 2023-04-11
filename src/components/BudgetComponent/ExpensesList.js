import React, { useContext } from "react";
import  {ExpenseItem}  from "./ExpenseItem";
import { BudgetContext } from "../../context/BudgetContext";
import { v4 } from "uuid";

export const ExpensesList = () => {
  const {expenses } = useContext(BudgetContext);
  return (
    <div>
      <ul className="expence-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key= {v4()}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
}

