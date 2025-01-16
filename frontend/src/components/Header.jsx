import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/bootstrap.custom.css';
import '../assets/styles/index.css';
import logo from '../assets/logo.png';
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
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
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
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