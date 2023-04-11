import React, { createContext, useReducer } from "react";
import { v4 } from "uuid";

const BudgetReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE_ITEM":
      return {
        ...state,
        expenses: state.expenses.filter((expense)=> expense.id !== action.payload),
      };
      case "CHANGE_BUDGET":
        return {
          ...state,
          budget: action.payload,
        };
    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialBudgetState = {
  budget: 20000,
  expenses: [
    { id: v4(), name: "Flight", cost: 100 },
    { id: v4(), name: "Hotel", cost: 500 },
    { id: v4(), name: "Rent a car", cost: 300 },
    { id: v4(), name: "Fuel", cost: 400 },
    { id: v4(), name: "Food", cost: 500 },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const BudgetContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
export const BudgetProvider = (props) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialBudgetState);
  return (
    <BudgetContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};
