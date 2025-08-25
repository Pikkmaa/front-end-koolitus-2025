import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { CartSumContext } from '../context/CartSumContext.jsx';
import { AuthContext } from '../context/AuthContext';

function NavigationBar() {
  const {cartSum} = useContext(CartSumContext);
  const {loggedIn, setLoggedIn} = useContext(AuthContext);

  function logout() {
    setLoggedIn(false)
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            {loggedIn === true && <NavDropdown title="Admin" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/add-product">Add Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-products">Maintain Products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-categories">Maintain Categories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-shops">Maintain Shops</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
          <Nav>
            {loggedIn === true ? <button onClick={logout} >Log out</button> :
            <>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            </>
            }
            <div>{cartSum}€</div>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar