import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { AuthContext } from "../../../Authproviders/AuthProviders";
import { Link } from "react-router-dom";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navber = () => {
    const {users, logOut}=useContext(AuthContext);

    const hendleLogout=()=>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <div className='text-end'>
                            {users && <UserCircleIcon  style={{ height: "40px" }} />}
                            
                            
                           {users? <Button onClick={hendleLogout} variant="primary" className='px-3'>Logout</Button> :  <Link to="/login"><Button className="text-white px-3" variant="primary">Login</Button></Link>}
                            
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navber;