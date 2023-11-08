import React from 'react';
import { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authproviders/AuthProviders';
import { useState } from 'react';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [checkbox, setCheckbox]=useState(false)

    const handleRegister=event=>{
        event.preventDefault()
        const form = event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log(name,email,password, photo)
        createUser(email,password)
        .then((result) => {
           
            const user = result.user;
            console.log(user)
            
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }

    const handleCheckbox=event=>{
        setCheckbox(event.target.checked)
    }
    return (
        <div className='w-50 mx-auto mt-5 '>
            <h2 className='text-center'>Register your account</h2>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleRegister}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="photo">
                                <Form.Label>Photo Url</Form.Label>
                                <Form.Control
                                    type="text" required name="photo" placeholder="Photo URL"
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="agree" className='mt-1'>
                                <Form.Check
                                    type="checkbox"
                                    onClick={handleCheckbox}
                                    name="agree"
                                    label={<>I agree to the <Link to="/terms">terms and conditions</Link></>}
                                    required
                                    
                                    
                                />
                            </Form.Group>

                            <Button disabled={!checkbox} className='w-100 mt-3' type="submit" variant="primary">
                                Register
                            </Button>

                            <p>Already have an account? Please <Link to="/login">Login</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;