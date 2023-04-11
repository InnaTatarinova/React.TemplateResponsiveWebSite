import React, { useContext, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { v4 } from "uuid";
import { BudgetContext } from "../../context/BudgetContext";

export const AddNewExpence = () => {
  const { dispatch } = useContext(BudgetContext);

  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  const newExpenseName = (e) => {
    setExpenseName(e.target.value);
  };

  const newExpenseCost = (e) => {
    setExpenseCost(e.target.value);
  };

  const addNewExpence = (e) => {
    e.preventDefault();
    const expense = {
      key: v4(),
      name: expenseName,
      cost: parseInt(expenseCost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setExpenseName("");
    setExpenseCost("");
  };

  return (
    <div>
      <form onSubmit={addNewExpence} className="form-newExpence">
        <h4>Name</h4>
        <input
          className="budget-input"
          value={expenseName}
          onChange={newExpenseName}
        ></input>
        <h4>Cost</h4>
        <input
          className="budget-input"
          value={expenseCost}
          onChange={newExpenseCost}
        ></input>
        <div className="btnSave">
          <ButtonComponent
            btnStyle="btn-standart-black"
            btnSize="btn-large"
            btnForm="btn-ellipse"
          >
            Save
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
