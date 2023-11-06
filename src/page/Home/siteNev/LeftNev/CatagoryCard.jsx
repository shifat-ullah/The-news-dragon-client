/* eslint-disable react/prop-types */
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BsFillBookmarkFill, BsFillShareFill,BsEyeFill,BsStar, BsFillStarFill } from "react-icons/bs";
import Rating from 'react-rating';

const CatagoryCard = ({ catagory }) => {
    // eslint-disable-next-line no-unused-vars
    const {  _id,title, details, image_url,rating, author, total_view } = catagory;

    return (
        <div>
            <Card className="mb-3 w-100">
                <Card.Header className='bg-secondary text-white'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <img style={{ height: "60px" }} className='rounded-circle mt-1' src={author.img} alt="" />
                            <div className='p-0 m-0 ps-2'>
                                <p>{author.name}</p>
                                <p>{moment(author.published_date).format(" MMMM Do YYYY")}</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-end align-items-center '>
                            <span> <BsFillBookmarkFill style={{ width: "30px", height: "50px" }} ></BsFillBookmarkFill></span>
                            <span><BsFillShareFill style={{ width: "30px", height: "50px" }}></BsFillShareFill></span>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 300)}....... <Link to={`/news/${_id}`}>Read more</Link></>}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between'>
                       <div>
                       <Rating
                        className=''
                        readonly
                            placeholderRating={rating.number}
                            emptySymbol={<BsStar></BsStar>}
                            placeholderSymbol={<BsFillStarFill></BsFillStarFill>}
                            fullSymbol={<BsFillStarFill></BsFillStarFill>}
                        /><span className='mx-2 '>{rating.number}</span>
                        </div>  
                        <span ><BsEyeFill></BsEyeFill>  {total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CatagoryCard;