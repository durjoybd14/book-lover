import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';

const NoMatch = () => {
    return (
        <div className="container">
            <MenuBar></MenuBar>
            <Jumbotron className="mt-5 mb-5 text-center">
                <Container>
                    <h1 className="text-center"><i className="fa fa-frown-o" aria-hidden="true"></i> Error-404 <i className="fa fa-frown-o" aria-hidden="true"></i></h1>
                    <h2>No Match Found</h2>
                </Container>
            </Jumbotron>

        </div>
    );
};

export default NoMatch;