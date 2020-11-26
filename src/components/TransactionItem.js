import React from 'react';

export const TransactionItem = (props) => {
    return (
        <li>{props.listItem.text} : {props.listItem.amount}</li>
    )
}


// export default TransactionItem;