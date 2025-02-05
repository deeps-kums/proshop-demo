import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/bootstrap.custom.css';
import '../assets/styles/index.css';
import logo from '../assets/logo.png';
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from 'react-redux';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
  return (
    <header>
        <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand>
                <img src={logo} alt='ProShop'></img>
                    ProShop
                </Navbar.Brand>
            </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <FaShoppingCart /> Cart
                            {
                                cartItems.length > 0 && (
                                    <Badge pill bg='success' style={{marginLeft:'5px'}}>
                                        {cartItems.reduce((a,c) => a + (c!=null ? c.qty : 0), 0)}
                                    </Badge>
                                )
                            }
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>
                            <FaUser /> Sign in
                        </Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
};

export default Header;