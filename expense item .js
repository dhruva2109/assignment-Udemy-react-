// ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <div className="expense-item__date">
        {date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default ExpenseItem;
