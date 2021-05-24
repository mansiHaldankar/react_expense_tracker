import { useState } from "react";

import "./Expenses.css";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

var Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    let itemYear = expense.date.getFullYear().toString();
    return itemYear === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChangedHandler={filterChangedHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/* -----------------Display Conditional Statement--------------------
      {filteredExpenses.length === 0 && <p>Expenses not found</p>}
      {filteredExpenses.length > 0 && renderedExpenses}
      ------------------------------------------------------------------ */}

      {/* -------------------------Display hardcode list-----------------------
       <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />  
      -----------------------------------------------------------------------------*/}
    </Card>
  );
};

export default Expenses;
