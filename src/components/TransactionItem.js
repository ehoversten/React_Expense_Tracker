import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

export const TransactionItem = (props) => {
    const { deleteTransaction } = useContext(TransactionContext);
    const sign = props.listItem.amount > 0 ? "+" : "-";

    return (
        <li className="mt-3">{props.listItem.text} : <span>{sign} ${Math.abs(props.listItem.amount)}</span>
            <button 
                className="btn btn-danger ml-3"
                onClick={ () => deleteTransaction(props.listItem.id) }>X</button>
        </li>
    )
}


// export default TransactionItem;