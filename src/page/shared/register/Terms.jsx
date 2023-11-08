import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        
            <Container className='text-center w-50'>
            <h1>Terms and Condistion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta iure accusamus nulla explicabo minima doloribus quod et alias nihil perspiciatis ipsum ipsa error expedita, sed rerum unde? Voluptate, iste.</p>
           <p>Go back to  <button><Link to="/register">Register</Link></button></p>
            </Container>
        
    );
};

export default Terms;