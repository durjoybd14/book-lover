import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const BooksCollection = (props) => {
    const history = useHistory();
    const { author, price, name, imageURL, _id } = props.book;
    const handleBuyNow = (id) => {
        const url = `/checkout/${id}`;
        history.push(url);
    }

    const cardStyle = {
        height: '300px',
        width: '300px',
        borderRadius: '8px',
    }

    return (
        <Card className="mx-auto p-3 shadow border-secondary bg-light">
            <Card.Img variant="top" src={imageURL} style={cardStyle} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="text-muted">{author}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ border: 'none' }} className="d-flex justify-content-between align-items-center rounded">
                <Card.Title>$ {price}</Card.Title>
                <button className="btn btn-primary" onClick={() => handleBuyNow(_id)}>Buy Now</button>
            </Card.Footer>
        </Card>
    );
};

export default BooksCollection;