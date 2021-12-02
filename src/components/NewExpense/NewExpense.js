import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShowing(false);
  };

  const startShowingHandler = () => {
    setIsShowing(true);
  };

  const stopShowingHandler = () => {
    setIsShowing(false);
  };

  return (
    <div className="new-expense">
      {!isShowing && (
        <button onClick={startShowingHandler}>Add New Expense</button>
      )}
      {isShowing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={stopShowingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
