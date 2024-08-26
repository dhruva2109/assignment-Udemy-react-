// Expenses.js
import React from 'react';
import ExpenseItem from './ExpenseItem'; // Import the ExpenseItem component

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
