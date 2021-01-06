import React, { useContext } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { TransactionContext } from '../contexts/TransactionContext';

const TotalsExpense = () => {
    // Bring in Context
    const { transactions } = useContext(TransactionContext);
    // Create Array containing all transaction amounts
    const amounts = transactions.map(item => item.amount);
    // Filter positive transaction amounts and sum them together
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    // Filter negative transaction amounts and sum them together
    const expense = amounts 
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <Container className="">
            <Row className="justify-content-center">
                <Card className='mr-2 income'>
                    <Card.Header className="income-title">Income</Card.Header>
                    <Card.Body>
                        <Card.Title>Added</Card.Title>
                        <Card.Text>
                            + ${income}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="expense">
                    <Card.Header className="expense-title">Expense</Card.Header>
                    <Card.Body>
                        <Card.Title>Subtracted</Card.Title>
                        <Card.Text>
                            - ${Math.abs(expense)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default TotalsExpense
