import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Navbar.Brand href="#home">React Expense Tracker </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>utilizing Hooks and ContextAPI</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
