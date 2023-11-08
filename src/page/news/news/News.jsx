import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowLeft } from "react-icons/bs";
import Navber from "../../shared/navber/Navber";

const News = () => {
    
    const news = useLoaderData();
    const {  _id,title, details, image_url,rating, author, total_view } = news;

    console.log({ news })
    return (
       <>
         <Navber></Navber>
        <div>       
            <Card style={{ width: '' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to="/"><Button variant="danger"><BsArrowLeft className="text-white"></BsArrowLeft>  All news in this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
       </>
    );
};

export default News;


