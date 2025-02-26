//import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
// import products from '../products';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
//import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';



const HomeScreen = () => {
    const { pageNumber, keyword } = useParams();
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fetchProducts = async ()=> {
    //         const { data } = await axios.get("/api/products");
    //         setProducts(data);
    //         console.log(products);
    //     };
    //     fetchProducts();
    // },[]);

    //The above code can be replaced with the one below
    const { data, isLoading, error } = useGetProductsQuery({
        keyword,
        pageNumber
    });

  return (
    <>
    {!keyword ? (<ProductCarousel />) : <Link to='/' className='btn btn-light mb-4'> Go Back </Link>}
    {isLoading ? (<Loader />) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (
        <>
        <h1>Latest Products</h1>
        <Row>
            {data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
        <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
    )}      
    </>
  )
};

export default HomeScreen;