import React from 'react';
import { Card } from 'react-bootstrap';

const OrderDetails = (props) => {
    const { name, price, checkOutDate, author } = props.order;
    return (
        <Card border="info" style={{ width: '25rem' }} className="mt-3 mx-auto">
            <Card.Header>Checkout At: {(new Date(checkOutDate).toDateString('dd/MM/yyyy'))} </Card.Header>
            <Card.Body>
                <Card.Title>Book Name: {name}</Card.Title>
                <Card.Title>Author: {author}</Card.Title>
                <Card.Text>Price: {price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default OrderDetails;