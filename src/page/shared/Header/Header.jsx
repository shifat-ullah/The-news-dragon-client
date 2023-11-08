import Container from 'react-bootstrap/Container'
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { AuthContext } from './../../../Authproviders/AuthProviders';
import { useContext } from "react";

const Header = () => {

const {user}=useContext(AuthContext); 
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

           

            


        </Container>
    );
};

export default Header;