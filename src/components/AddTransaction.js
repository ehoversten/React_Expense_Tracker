import React from 'react'
import { Card, Form } from 'react-bootstrap';

const AddTransaction = () => {
    return (
        <div className="container mt-3">
            <Card>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Add Transaction</Form.Label>
                        <Form.Control type="text" placeholder="Enter Transaction" />
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default AddTransaction;
