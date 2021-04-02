import React, { useContext } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const MenuBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loginStyle = {
        backgroundColor: '#96e1f5',
        borderRadius: '5px',
        padding: '8px 18px'

    }

    return (
        <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/home"><h5>BOOK LOVERS</h5></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                    <Nav.Link as={Link} to="/login" style={loginStyle}>Login</Nav.Link>
                    <Nav.Link className="text-success">{loggedInUser.userName}</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;