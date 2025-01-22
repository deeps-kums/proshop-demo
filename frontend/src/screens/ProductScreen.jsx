//import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import products from '../products';
import { Row, Col, ListGroup, Image, ListGroupItem, Card, Button } from 'react-bootstrap';
import Rating from "../components/Rating";
//import axios from 'axios';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
   const { id: productId } = useParams();
//   const [ product, setProduct ] = useState({});
  //const product = products.find((p) => p._id === Number(productId) );
//   useEffect(() => {
//     const fetchProduct = async ()=> {
//         const { data } = await axios.get(`/api/products/${productId}`);
//         setProduct(data);
//         console.log(product);
//     };
//     fetchProduct();
// },{});
//   console.log(product);

//The above code can be replaced as below

const { data:product, isLoading, error } = useGetProductDetailsQuery(productId);

  return (
    <>
    <Link className="btn btn-light my-3" to="/">
            Go back
        </Link>
    { isLoading ? (<Loader />) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (
        <>
        <Row>
           <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
           </Col>
           <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: ${product.description}
                    </ListGroup.Item>
                </ListGroup>
           </Col>
           <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                <strong>{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
           </Col>
        </Row>
        </>
    ) }      
    </>
  );
}

export default ProductScreen