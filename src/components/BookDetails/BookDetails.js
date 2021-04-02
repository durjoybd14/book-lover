import React from 'react';
import { Table } from 'react-bootstrap';
import './BookDetails.css';

const BookDetails = (props) => {
    const { author, price, name, _id } = props.book;

    const deleteBook = id => {
        const url = `https://fathomless-shore-28553.herokuapp.com/deleteBook/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    window.location.reload();
                }
            })
    }

    return (
        <Table bordered hover variant="primary">
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>{price}</td>
                    <td><i className="fa fa-pencil text-success" aria-hidden="true"></i> <i onClick={() => deleteBook(_id)} className="fa fa-trash-o text-danger" aria-hidden="true"></i></td>
                </tr>
            </tbody>

        </Table>
    );
};

export default BookDetails;