import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TotalsExpense from './components/TotalsExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

// Import Context Provider
import { TransactionProvider } from './contexts/TransactionContext';

import './App.css';

function App() {
  return (
    <TransactionProvider>
      <Header />
      <Balance />
      <TotalsExpense />
      <TransactionList />
      <AddTransaction />
    </TransactionProvider>
  );
}

export default App;
