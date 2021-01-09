import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TotalsExpense from './components/TotalsExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

// Import Context Provider
import { TransactionProvider } from './contexts/TransactionContext';

import { Container } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <TransactionProvider>
      <Header />
        <Container>
          <div className="content-wrapper">
            <Balance />
            <TotalsExpense />
            <TransactionList />
            <AddTransaction />
          </div>
        </Container>
    </TransactionProvider>
  );
}

export default App;
