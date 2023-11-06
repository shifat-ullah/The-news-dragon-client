import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Button, Nav } from 'react-bootstrap';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <Container>

            <div className=' text-center'>
                <img src={logo} alt="" />
                <h5>Journalism Without Fear or Favour</h5>
                <p>{moment().format('dddd, MMMM D, YYYY, h:mm:ss a')}</p>
            </div>

            <div className='bg-secondary bg-gradient p-2 d-flex'>
                <button className='btn btn-danger'>Latest</button>
                <Marquee pauseOnHover className='text-white fs-4'>
                Match Highlights: \:?  CDSG  VBGermany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

           {/* ........................navber.................................. */}

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
            <Link><UserCircleIcon  className="h-25 w-25" /></Link>
            <Link to=""><Button variant="primary">LogIn</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            


        </Container>
    );
};

export default Header;