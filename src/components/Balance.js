import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const Balance = () => {
    // Bring in Context
    const { transactions } = useContext(TransactionContext);
    // Create an ARRAY of all amounts
    const sumArray = transactions.map(item => item.amount);
    // Sum the total amount from all transactions
    const totalSum = sumArray.reduce((acc, elem) => (acc += elem), 0);

    return (
        <div className="container">
            <h4>Current Balance</h4>
            <h4>${totalSum}</h4>
        </div>
    )
}

export default Balance;
