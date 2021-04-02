import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';


const EditBooks = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <AdminSideBar />
                </div>
                <div className="col-lg-9 p-5">
                    <h5>EditBooks</h5>
                    <Jumbotron className="m-5 text-center">
                        <h5>This component coming soon...</h5>
                        <h1>Contact Us</h1>
                        <h4>Email: booklovers1@gmail.com</h4>
                        <h5>Phone: 01722233300</h5>
                    </Jumbotron>
                </div>
            </div>
        </div>

    );
};

export default EditBooks;