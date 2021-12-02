import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">${data.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
