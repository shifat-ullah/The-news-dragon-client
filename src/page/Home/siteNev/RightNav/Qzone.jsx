import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'
import bg1 from '../../../../assets/bg1.png'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Qzone = () => {
    return (
        <div>
            <div className='bg-secondary p-1 text-center mt-1'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>


            <div>
                <Card className="bg-dark text-white mt-3">
                    <Card.Img src={bg1} className='' alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='text-center mt-4 fs-1'>Create an Amazing Newspaper</Card.Title>
                        <Card.Text className='text-center fs-5 mt-4'>
                        Discover thousands of options, easy to customize layouts,
                         one-click to import demo and much more.
                        </Card.Text>
                        <Card.Text className='text-center'><Button className='p-2 px-4' variant="danger">Primary</Button>{' '}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default Qzone;