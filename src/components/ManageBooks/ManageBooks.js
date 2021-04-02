import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import BookDetails from '../BookDetails/BookDetails';
import '../BookDetails/BookDetails.css';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://fathomless-shore-28553.herokuapp.com/books`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <AdminSideBar />
                </div>
                <div className="col-lg-9 p-5">
                    <h5>Manage Books</h5>
                    <Table bordered variant="primary" className="mt-5">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Book Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </Table>
                    {
                        books.map(book => <BookDetails book={book} key={book._id}></BookDetails>)
                    }
                </div>
            </div>
        </div>

    );
};

export default ManageBooks;