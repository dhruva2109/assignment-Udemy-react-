// App.js
import React from 'react';
import Expenses from './Expenses';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Grocery', amount: 94.12, date: new Date(2023, 7, 14) },
    { id: 'e2', title: 'Electricity Bill', amount: 199.56, date: new Date(2023, 8, 10) },
    { id: 'e3', title: 'Internet Bill', amount: 45.99, date: new Date(2023, 8, 25) },
    { id: 'e4', title: 'Rent', amount: 1200.00, date: new Date(2023, 7, 1) },
  ];

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
