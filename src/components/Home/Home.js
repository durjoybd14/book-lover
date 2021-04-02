import React, { useEffect, useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import BooksCollection from '../BooksCollection/BooksCollection';
import MenuBar from '../MenuBar/MenuBar';
import './Home.css'


const Home = () => {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-retreat-04574.herokuapp.com/books`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <MenuBar></MenuBar>
            <div className="row m-5">
                <div className="col-lg-4 col-md-2 col-sm-2"></div>
                <div className="col-lg-4 col-md-8 col-sm-8">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <input type="text" className="form-control" placeholder="Search Book" />
                            <button className="btn btn-success">Search</button>
                        </InputGroup.Prepend>
                    </InputGroup>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-2"></div>
            </div>

            {

                loading ?
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 text-center">
                            <img src="https://i.ibb.co/XxBfXMw/spinner-icon-gif-23.gif" style={{ width: '80px' }} alt="" />

                        </div>
                        <div className="col-lg-4"></div>
                    </div> :
                    <div className="book-container">

                        {
                            books.map(book => <BooksCollection book={book} key={book._id}></BooksCollection>)
                        }

                    </div>
            }

        </div>
    );
};

export default Home;