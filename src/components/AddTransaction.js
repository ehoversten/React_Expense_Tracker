import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';

const AddTransaction = () => {
    // Setup useState hooks
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div className="container mt-3">
            <Card className="container p-3">
                <Form>
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
