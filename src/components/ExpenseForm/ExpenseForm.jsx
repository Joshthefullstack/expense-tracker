import React from 'react';
import style from "./ExpenseForm.module.css";
// import { useState } from 'react';

const ExpenseForm = ({setExpenseAdded, setEnteredAmount, setEnteredDate, setEnteredDescription}) => {


  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  }

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  }



  return (
    <div>
      <form>
        <div className={style.form_control}>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={descriptionHandler} />
        </div>
        <div className={style.form_control}>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount"  onChange={amountHandler} />
        </div>
        <div className={style.form_control}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date"  onChange={dateHandler} />
        </div>
        {/* <button type="submit">Add Expense</button> */}
      </form>
    </div>
  )
}

export default ExpenseForm