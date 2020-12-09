import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TransactionContext } from '../contexts/TransactionContext';
import { TransactionItem } from './TransactionItem';

import './styles.css';

const TransactionList = () => {
    const context = useContext(TransactionContext);
    // -- TESTING -- //
    console.log(context);

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <h3>Transaction History</h3>
                <ul className="history">
                    {context.transactions.map( item => (
                        <TransactionItem key={item.id} listItem={item} />))}
                </ul>
            </Row>
        </Container>
    )
}

export default TransactionList;
