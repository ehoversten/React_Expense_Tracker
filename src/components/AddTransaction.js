import React, { useState, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TransactionContext } from '../contexts/TransactionContext';
import { Card, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';

const AddTransaction = () => {
    // Setup useState hooks
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    // Bring in our CONTEXT
    const { addTransaction } = useContext(TransactionContext);

    // Define our onSubmit method logic
    const onSubmit = e => {
        e.preventDefault();
        console.log("Submitting new transaction");
        let newTransaction = {
            id: uuidv4(),
            text: text,
            amount: parseInt(amount)
        }

        console.log(newTransaction);
        addTransaction(newTransaction);

        // Clear 'text' and 'amount' STATE (and form inputs)
        setText('');
        setAmount('');
    } 

    return (
        <Container className="add mt-3">
            <Row className="justify-content-center">
                <Card className="container p-3">
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Description</Form.Label>
                            { /* added associated value hooks and onChange handlers to inputs */ }
                            <Form.Control type="text" id="text" value={text} onChange={ (e) => setText(e.target.value) } placeholder="Enter Transaction Description" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" id="amount" value={amount} onChange={ (e) => setAmount(e.target.value) } placeholder="Enter Amount" />
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    )
}

export default AddTransaction;
