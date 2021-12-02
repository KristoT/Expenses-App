import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (data) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /*========
	Multi line statement
	==========*/
  // const [userInput, setUserInput] = useState({
  // 	enteredTitle: "",
  // 	enteredAmount: "",
  // 	enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*========
		This is one way to do it better
		==========*/
    // setUserInput({
    // 	...userInput,
    // 	enteredTitle: event.target.value,
    // });
    /*========
				This is how u should do it
				==========*/
    // 	setUserInput((prevState) => {
    // 		return { ...prevState, enteredTitle: event.target.value };
    // 	});
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*========
		This is one way to do it better
		==========*/
    // setUserInput({
    // 	...userInput,
    // 	enteredAmount: event.target.value,
    // });
    /*========
				This is how u should do it
				==========*/
    // setUserInput((prevState) => {
    // 	return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*========
		This is one way to do it better
		==========*/
    // setUserInput({
    // 	...userInput,
    // 	enteredDate: event.target.value,
    // });
    /*========
				This is how u should do it
				==========*/
    // setUserInput((prevState) => {
    // 	return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    data.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01.01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="button" onClick={data.onCancel}>
        Cancel
      </button>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
