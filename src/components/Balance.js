import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TransactionContext } from '../contexts/TransactionContext';

const Balance = () => {
    // Bring in Context
    const { transactions } = useContext(TransactionContext);
    // Create an ARRAY of all amounts
    const sumArray = transactions.map(item => item.amount);
    // Sum the total amount from all transactions
    const totalSum = sumArray.reduce((acc, elem) => (acc += elem), 0).toFixed(2);

    return (

        <Container className="mb-3">
            <Row className="justify-content-center">
                <h4>Current Balance</h4>
            </Row>
            <Row className="justify-content-center">
                <h4>${totalSum}</h4>
            </Row>
        </Container>
    )
}

export default Balance;
