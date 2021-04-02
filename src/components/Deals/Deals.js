import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';

const Deals = () => {
    return (
        <div className="container">
            <MenuBar></MenuBar>
            <Jumbotron className="m-3 text-center">
                <h5>Deals component coming soon...</h5>
                <h1>Stay Connected...</h1>
            </Jumbotron>
        </div>
    );
};

export default Deals;