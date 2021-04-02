import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

const AdminContainer = () => {
    return (
        <div className="p-5 bg-info adminHalfLeft">
            <h5><Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>BOOK LOVERS</Link></h5>

            <div className="mt-5">
                <Link to="/manageBooks"><h6><i className="fa fa-windows" aria-hidden="true" /> Manage Books</h6></Link>
                <Link to="/addBooks"><h6 className="mt-4"><i className="fa fa-plus" aria-hidden="true" /> Add Books</h6></Link>
                <Link to="/editBooks"><h6 className="mt-4"><i className="fa fa-pencil" aria-hidden="true" /> Edit Books</h6></Link>
            </div>
        </div>
    );
};

export default AdminContainer;