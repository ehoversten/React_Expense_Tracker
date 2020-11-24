import React from 'react';
import { Card } from 'react-bootstrap';

const TotalsExpense = () => {
    return (
        <div className="container justify-content-center mt-4">
            <div className="row justify-content-center">
                <Card className='mr-2'>
                    <Card.Header>Income</Card.Header>
                    <Card.Body>
                        <Card.Title>Added</Card.Title>
                        <Card.Text>
                        + $0.00
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header>Expense</Card.Header>
                    <Card.Body>
                        <Card.Title>Subtracted</Card.Title>
                        <Card.Text>
                        - $0.00
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default TotalsExpense
