import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import MenuBar from '../MenuBar/MenuBar';


const CheckOut = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkOutDate: new Date()
    })

    const [selectedBook, setSelectedBook] = useState({});
    useEffect(() => {
        fetch(`https://aqueous-retreat-04574.herokuapp.com/checkout/${id}`)
            .then(res => res.json())
            .then(data => setSelectedBook(data[0]))
    }, [])

    const { name, price } = selectedBook;

    const handleCheckOut = () => {
        const userInformation = { ...loggedInUser, ...selectedDate, ...selectedBook };

        fetch(`https://aqueous-retreat-04574.herokuapp.com/addCheckout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="container">
            <MenuBar />
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h3 className="mt-5">CheckOut</h3>
                    <form>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{name}</td>
                                    <td>1</td>
                                    <td>${price}</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Total</th>
                                    <th></th>
                                    <th>${price}</th>
                                </tr>
                            </thead>
                        </Table >
                        <button onClick={handleCheckOut} className="btn btn-success d-block ml-auto"><Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>CheckOut</Link></button>

                    </form>

                </div>
                <div className="col-lg-2"></div>
            </div>

        </div>
    );
};

export default CheckOut;