import React, { useContext, useState } from "react";
import "./BudgetComponent.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { BudgetContext } from "../../context/BudgetContext";

export const MainViewBudgetComponent = (props) => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(BudgetContext);
  const [budgetEditing, setBudgetEditing] = useState(false);

  const changeInput = (e) => {
    setValue(e.target.value);
  };


  const editBudget = () => {
    setBudgetEditing(true);
  };

  const saveBudget = () => {
    dispatch({
      type: "CHANGE_BUDGET",
      payload: value,
    });

    setBudgetEditing(false);
    setValue("");
  };

  return (
    <div
      className="budgetMainComponent"
      style={{
        backgroundColor: props.background,
        color: props.fontColor,
      }}
    >
      {props.btn === undefined ? (
        <span>{props.name}</span>
      ) : budgetEditing === false ? (
        <>
          {" "}
          <span>{props.name}</span>
          <ButtonComponent
            btnStyle="btn-outline_black"
            btnSize="btn-small"  
            btnForm="btn-ellipse"
            onClick={editBudget}
          >  
            {props.btn}
          </ButtonComponent>
        </>
      ) : (
        <>
          <input onChange={changeInput} value={value} className="budgetInputValue" />
          <ButtonComponent
            btnStyle="btn-outline_black"
            btnSize="btn-small"
            btnForm="btn-ellipse"
            onClick={saveBudget}
          >
            Save
          </ButtonComponent>{" "}
        </>
      )}
    </div>
  );
};
