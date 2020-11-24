import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const TransactionList = () => {
    const context = useContext(TransactionContext);
    console.log(context);

    return (
        <div className="container mt-3">
            <h3>Transaction History</h3>
            <ul className="history">
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ul>
        </div>
    )
}

export default TransactionList;
