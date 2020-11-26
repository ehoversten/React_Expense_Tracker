import React from 'react';

export const TransactionItem = (props) => {
    const sign = props.listItem.amount > 0 ? "+" : "-";

    return (
        <li>{props.listItem.text} : <span>{sign}</span> ${Math.abs(props.listItem.amount)}</li>
    )
}


// export default TransactionItem;