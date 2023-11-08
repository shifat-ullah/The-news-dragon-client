import React, { useContext, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authproviders/AuthProviders';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
const Login = () => {
    const {loginUser} =useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate()
    const from = location.state?.from?.pathname || '/catagory/0'
    console.log(location)
    const handleLogin=event=>{
        event.preventDefault()
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password, )
        loginUser(email,password)
        .then((result) => {
           
            const user = result.user;
            console.log(user)
            Navigate(from, {replace:true})
            
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }


    return (
        <div className='w-25 mx-auto '>
            <Container>
                <h2 className='mb-3 mt-5'>Login Your Account</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='p-3' name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='p-3' name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    
                    <p><Button variant="link"><Link to="/register">Your dont have any account ? Please Register</Link></Button></p>
                    <Button className='w-100 mt-2' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;