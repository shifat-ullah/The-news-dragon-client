import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

import { Col,  Container,  Row } from 'react-bootstrap';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import RightNav from '../Home/siteNev/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <>
        <Header></Header>
        
        {/* ................................................................. */}
        <Container>
        <Row>
          
          <Col sm={9}>
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
export default NewsLayout;