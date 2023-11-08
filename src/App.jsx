import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './page/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './page/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from './page/Home/siteNev/RightNav/RightNav';
import LeftNev from './page/Home/siteNev/LeftNev/LeftNev';

import Catagorys from './page/Home/siteNev/LeftNev/Catagorys';
import Navber from './page/shared/navber/Navber';

function App() {

  return (
    <>
      
      <Header></Header>
      <Navber></Navber>
      
      
      {/* ................................................................. */}
      <Container>
      <Row>
        <Col sm={3}>
          <LeftNev></LeftNev>
        </Col>

        <Col sm={6}> 
        
        <Outlet></Outlet>
          
        </Col>

        <Col sm={3} className='mt-2'>
        
          <RightNav></RightNav>
          </Col>
      </Row>
    </Container>
    {/* .................................................................................. */}
      <Footer></Footer>
    </>
  )
}

export default App
