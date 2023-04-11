import React, { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";

export const ExpenseItem = (props) => {
  const {dispatch} = useContext(BudgetContext);

  const deleteExpenseItem = (e) => {
    dispatch({
      type:"DELETE_EXPENSE_ITEM",
      payload:props.id,
    })


  };

  return (
    <li className="expense-item">
      <h4>{props.name}</h4>
      <div className="expense-cost">
        <span className="expence-amount"> ${props.cost}</span>
        <i
          className="bi bi-x-circle delete-btn"
          onClick={deleteExpenseItem}
        ></i>
      </div>
    </li>
  );
};
