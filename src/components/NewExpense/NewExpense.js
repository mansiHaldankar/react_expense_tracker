import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
  };

  const onCloseExpenseHandler = () => {
    setDisplayExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!displayExpenseForm && (
        <button onClick={() => setDisplayExpenseForm(true)}>
          Add New Expenses
        </button>
      )}
      {displayExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={onCloseExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
