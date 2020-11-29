import React, { useState, useContext } from 'react';
const { TransactionContext } from '../contexts/TransactionContext';
import { Card, Form, Button } from 'react-bootstrap';

const AddTransaction = () => {
    // Setup useState hooks
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    // Bring in our CONTEXT
    const { addTransaction } = useContext(TransactionContext);

    // Define our onSubmit method logic
    const onSubmit = e => {
        e.preventDefault();
        console.log("Submitting new transaction")
    } 

    return (
        <div className="container mt-3">
            <Card className="container p-3">
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Description</Form.Label>
                        { /* added associated value hooks and onChange handlers to inputs */ }
                        <Form.Control type="text" value={text} onChange={ (e) => setText(e.target.value) } placeholder="Enter Transaction Description" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" value={amount} onChange={ (e) => setAmount(e.target.value) } placeholder="Enter Amount" />
                    </Form.Group>
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </Card>
        </div>
    )
}

export default AddTransaction;
