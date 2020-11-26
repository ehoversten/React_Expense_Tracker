import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import { TransactionItem } from './TransactionItem';

const TransactionList = () => {
    const context = useContext(TransactionContext);
    // -- TESTING -- //
    console.log(context);

    return (
        <div className="container mt-3">
            <h3>Transaction History</h3>
            <ul className="history">
                {context.transactions.map( item => (
                    <TransactionItem key={item.id} listItem={item} />))}
            </ul>
        </div>
    )
}

export default TransactionList;
