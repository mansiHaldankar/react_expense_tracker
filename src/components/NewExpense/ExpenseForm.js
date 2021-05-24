import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //   const [enteredInput, setEnteredInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: event.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(enteredInput);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: event.target.value,
    // });
    // console.log(enteredInput);
  };
  const dateChangedHandler = (event) => {
    setenteredDate(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: event.target.value,
    // });
    // console.log(enteredInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setenteredDate("");
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
