import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TotalsExpense from './components/TotalsExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <TotalsExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
