import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.Config';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signedInUser = { userName: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);

            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const formStyle = {
        border: '2px solid blue',
        borderRadius: '10px',
        margin: '20px 20px',
        padding: '20px'
    }

    const buttonStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        textDecoration: 'underline'

    }

    return (

        <div className="container">
            <MenuBar></MenuBar>
            <div className="row">
                <div className="col-12">

                    {newUser ?
                        <Form style={formStyle}>
                            <h3 className="py-3">Create an account</h3>
                            <Form.Group>
                                <Form.Control className="mt-2" name="name" type="text" placeholder="Name" required />
                                <Form.Control className="mt-2" name="email" type="email" placeholder="User Name or Email" required />
                                <Form.Control className="mt-2" name="password" type="password" placeholder="Password" required />
                                <Form.Control className="mt-2" name="confirmPassword" type="password" placeholder="Confirm Password" required />
                            </Form.Group>

                            <Button className="form-control" variant="primary" type="submit">Create an account</Button>

                            <Form.Text onClick={() => setNewUser(!newUser)} className="text-muted text-center m-2">Already have an account? <button style={buttonStyle}> Login</button> </Form.Text>
                            <Form.Text className="text-muted text-center m-3">OR</Form.Text>

                            <Button className="text-center mx-auto d-block border border-2 border-primary" variant="light" onClick={handleGoogleSignIn}><i className="fa fa-google text-success" aria-hidden="true"></i> <span>Continue With Google</span></Button>

                            <Button className="text-center mx-auto mt-2 d-block border border-2 border-primary" variant="light"><i className="fa fa-facebook-official text-primary" aria-hidden="true"></i> <span> Continue With Facebook</span></Button>
                        </Form>

                        :

                        <Form style={formStyle}>
                            <h3 className="py-3">Login</h3>
                            <Form.Group>
                                <Form.Control className="mt-3" name="email" type="email" placeholder="Email" required />
                                <Form.Control className="mt-3" name="password" type="password" placeholder="Password" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox" className=" d-flex justify-content-between">
                                <Form.Check type="checkbox" label="Remember Me" />
                                <Form.Check as={Link} to="#" className="text-muted">Forgot Password</Form.Check>
                            </Form.Group>

                            <Button className="form-control" variant="primary" type="submit">Login</Button>

                            <Form.Text className="text-muted text-center m-2">Don't have an account? <button onClick={() => setNewUser(!newUser)} style={buttonStyle}> Create an account</button> </Form.Text>
                            <Form.Text className="text-muted text-center m-3">OR</Form.Text>

                            <Button className="text-center mx-auto d-block border border-2 border-primary" variant="light" onClick={handleGoogleSignIn}><i className="fa fa-google text-success" aria-hidden="true"></i> <span>Continue With Google</span></Button>

                            <Button className="text-center mx-auto mt-2 d-block border border-2 border-primary" variant="light"><i className="fa fa-facebook-official text-primary" aria-hidden="true"></i> <span> Continue With Facebook</span></Button>

                        </Form>
                    }

                </div>
            </div>
        </div>
    );
};

export default Login;